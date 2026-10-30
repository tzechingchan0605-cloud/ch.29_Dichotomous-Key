// Each original is observed independently; these are visible photo characteristics, not a species-wide key.
export const photos={
 A:{model:'butterfly',image:'assets/金裳鳳蝶.jpeg',source:'http://www.kaohsiungfarm.com.tw/Font-Page/butterfly-dtl/butterfly06/',sourceLabel:'butterflySource',observations:['hindwingTail','wingEyespot','wingStripes'],values:{hindwingTail:false,wingEyespot:false,wingStripes:true},regions:{wingEyespot:[45,48,455,250],hindwingTail:[168,190,180,116],wingStripes:[45,48,455,140],hindwingPatches:[174,158,170,136]}},
 B:{model:'fish',image:'assets/羅非魚.jpeg',source:'https://agroworld.my/cn/article-details/389-article-05',sourceLabel:'fishSource',observations:['splitDorsal','forkedTail','bodyEyespot'],values:{splitDorsal:false,forkedTail:false,bodyEyespot:false},regions:{splitDorsal:[285,215,1160,340],forkedTail:[14,355,515,550],bodyEyespot:[550,540,840,370]}}
};
export function photoFor(model){return Object.values(photos).find(p=>p.model===model);}
export function photoKey(model){const p=photoFor(model);function build(i){if(i===p.observations.length)return {photo:true,terminal:'photoMatched'};const feature=p.observations[i],next=build(i+1),mismatch={photo:true,terminal:'photoMismatch'};return {photo:true,feature,yes:p.values[feature]?next:mismatch,no:p.values[feature]?mismatch:next};}return build(0);}
export function photoFirstError(model,route){const p=photoFor(model);for(let i=0;i<route.length;i++){const f=p.observations[i];if(route[i]!== (p.values[f]?'yes':'no'))return {index:i,feature:f,value:p.values[f]};}return null;}
