const fs=require('fs'),path=require('path'),https=require('https');
const KEY='gOLCC4VX8HT6Z9Uw9yDGKJmsFVQDUZlLDk8t7T92QxShgmSmaoO30xDV';
const DIR=path.join(__dirname,'data','countries');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function search(q){return new Promise((res,rej)=>{const u='https://api.pexels.com/v1/search?query='+encodeURIComponent(q)+'&per_page=5&orientation=landscape';https.get(u,{headers:{Authorization:KEY}},r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>{try{const j=JSON.parse(d);res(j.photos&&j.photos[0]?j.photos[0].src.landscape||j.photos[0].src.large:null)}catch(e){rej(e)}});r.on('error',rej)}).on('error',rej)})}
async function main(){
const files=fs.readdirSync(DIR).filter(f=>f.endsWith('.ts'));
console.log('Found '+files.length+' country files');
let fixed=0,skip=0,fail=0;
for(let i=0;i<files.length;i++){
const f=files[i],fp=path.join(DIR,f),cn=f.replace('.ts','');
let c=fs.readFileSync(fp,'utf8');
if(/landscapeImage:\s*'https:\/\/images\.pexels\.com/.test(c)){skip++;console.log('['+(i+1)+'/'+files.length+'] '+cn+' - already Pexels');continue}
const q=cn.replace(/-/g,' ')+' landscape scenery country';
try{
await sleep(400);
let url=await search(q);
if(!url){await sleep(400);url=await search(cn.replace(/-/g,' ')+' country');}
if(!url){console.log('['+(i+1)+'/'+files.length+'] '+cn+' - NO IMAGE');fail++;continue}
if(c.includes('landscapeImage:')){c=c.replace(/landscapeImage:\s*'[^']*'/,"landscapeImage: '"+url+"'")}
else{c=c.replace(/(flag:\s*'[^']*',?\s*\n)/,"$1  landscapeImage: '"+url+"',\n")}
fs.writeFileSync(fp,c,'utf8');
fixed++;console.log('['+(i+1)+'/'+files.length+'] '+cn+' - DONE')
}catch(e){console.log('['+(i+1)+'/'+files.length+'] '+cn+' - ERROR: '+e.message);fail++}
}
console.log('\n=== DONE === Fixed: '+fixed+', Already Pexels: '+skip+', Failed: '+fail);
}
main().catch(console.error);
