"use client";

import { useEffect, useRef, useState } from "react";

type LatLng = { latitude: number; longitude: number };
export type AvailableContractor = {
  contractorId: number; name: string; latitude: number; longitude: number; rating?: number; distanceKm: number; etaMinutes?: number; startingPrice?: number; qualityScore?: number;
};
type Props = { contractors: AvailableContractor[]; customerLocation: LatLng; onSelect?: (contractor: AvailableContractor) => void; height?: number };

function loadGoogleMaps(apiKey:string):Promise<void>{
 if(window.google?.maps)return Promise.resolve(); const existing=document.getElementById("reno-google-maps");
 if(existing)return new Promise((resolve,reject)=>{const timer=window.setInterval(()=>{if(window.google?.maps){window.clearInterval(timer);resolve()}},50);window.setTimeout(()=>{window.clearInterval(timer);reject(new Error("Google Maps failed to load"))},15000)});
 return new Promise((resolve,reject)=>{const script=document.createElement("script");script.id="reno-google-maps";script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;script.async=true;script.defer=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error("Google Maps failed to load"));document.head.appendChild(script)})
}

export default function ContractorAvailabilityMap({contractors,customerLocation,onSelect,height=440}:Props){
 const mapNode=useRef<HTMLDivElement>(null); const map=useRef<google.maps.Map|null>(null); const markers=useRef<google.maps.Marker[]>([]); const userMarker=useRef<google.maps.Marker|null>(null); const [error,setError]=useState("");
 useEffect(()=>{let cancelled=false;const apiKey=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;if(!apiKey){setError("Google Maps is not configured.");return}loadGoogleMaps(apiKey).then(()=>{if(cancelled||!mapNode.current)return;const center={lat:customerLocation.latitude,lng:customerLocation.longitude};if(!map.current)map.current=new google.maps.Map(mapNode.current,{center,zoom:13,mapTypeControl:false,streetViewControl:false,fullscreenControl:true});else map.current.setCenter(center);
  markers.current.forEach(m=>m.setMap(null));markers.current=[];if(userMarker.current)userMarker.current.setMap(null);userMarker.current=new google.maps.Marker({map:map.current,position:center,title:"Your location",label:"You"});
  contractors.forEach(c=>{const marker=new google.maps.Marker({map:map.current!,position:{lat:c.latitude,lng:c.longitude},title:`${c.name} — ${c.distanceKm.toFixed(1)} km away`,label:"✓"});marker.addListener("click",()=>onSelect?.(c));markers.current.push(marker)})
 }).catch(e=>{if(!cancelled)setError(e instanceof Error?e.message:"Unable to load map")});return()=>{cancelled=true;markers.current.forEach(m=>m.setMap(null));markers.current=[]}},[contractors,customerLocation,onSelect]);
 if(error)return <div role="alert" style={{minHeight:height,display:"grid",placeItems:"center"}}>{error}</div>; return <div ref={mapNode} aria-label="Available contractors map" style={{width:"100%",height,borderRadius:16,overflow:"hidden"}}/>;
}
