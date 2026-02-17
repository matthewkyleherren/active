import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{f as gi}from"./MoneyUtils-CsZiXqQZ.js";import{D as Pi}from"./Dialog-jDOmAE4R.js";import{T as I}from"./Text-BllDrnEv.js";import{u as Si}from"./ShopCashProvider-Jz119DQV.js";import{r as h,g as Oi}from"./chunk-EPOLDU6W-CsjFHsfv.js";import{u as Mi}from"./updatePaginatedQuery-BO2WB4Mm.js";import{c as $i,U as qi,u as ji}from"./useMonorail-CKSKmKQz.js";import{d as hi,f as Vi}from"./dateFormat-AzSE9Xxt.js";import{d as gn}from"./MoneyV2Fragment-XdlHnX2E.js";import{d as w}from"./ReducedImageFragment-CkTGK3vJ.js";import{u as be}from"./useTranslation-DI_2-mvA.js";import{u as Li}from"./useQuery-C4mkQZ1K.js";import{N as Hi}from"./ObservableQuery-C0Qdj_tN.js";import{I as Gi,E as Bi}from"./types-CoStKfMA.js";import{L as Ui}from"./LinkButton-CGF0sOa_.js";import{T as Qi}from"./TrackingPixel-DFcemoD5.js";import{I as zi}from"./Image-ItGmJzlN.js";import{M as Yi}from"./MerchantLogo-C4BJbBix.js";import{b as Ki,d as pi,c as _i,a as Ji,i as Xi,e as pn,s as Wi,C as Zi}from"./shop-cash-coin-purple@3x-C56irYvC.js";import{i as et}from"./formatOrderStatus-DJCTK8ea.js";import{n as nt,d as it,s as tt,i as at}from"./format-CLNxfakE.js";import{r as rt}from"./capitalize-BUPw6NOx.js";import{b as dt,a as ot,d as st}from"./VisualThemeFragment-BDzcZ-HS.js";import{d as Ae}from"./normalizeShopCashIncentive-CKE2W_IK.js";import{d as Ie}from"./section-cyc6tDLZ.js";import{d as lt}from"./ShopCashBackPromotionFragment-BCjriAuu.js";var Fi=(e=>(e.BUYER_COMPENSATION_REWARD="BUYER_COMPENSATION_REWARD",e.CASHBACK_REWARD="CASHBACK_REWARD",e.EMPLOYEE_COMPENSATION_REWARD="EMPLOYEE_COMPENSATION_REWARD",e.MARKETING_GIFT_REWARD="MARKETING_GIFT_REWARD",e.OTHER="OTHER",e.OTHER_REWARD="OTHER_REWARD",e.REDEMPTION="REDEMPTION",e))(Fi||{}),k=(e=>(e.BUYER_COMPENSATION="BUYER_COMPENSATION",e.CREDITED="CREDITED",e.EARNED="EARNED",e.EMPLOYEE_COMPENSATION="EMPLOYEE_COMPENSATION",e.EXPIRED="EXPIRED",e.GIFTED="GIFTED",e.OTHER="OTHER",e.PENDING="PENDING",e.REDEEMED="REDEEMED",e.REFUNDED="REFUNDED",e))(k||{});function ct(e,n,i){const[t,o]=nt(i==null?void 0:i.in,e,n),r=Fn(t,o),s=Math.abs(it(t,o));t.setDate(t.getDate()-r*s);const a=+(Fn(t,o)===-r),d=r*(s-a);return d===0?0:d}function Fn(e,n){const i=e.getFullYear()-n.getFullYear()||e.getMonth()-n.getMonth()||e.getDate()-n.getDate()||e.getHours()-n.getHours()||e.getMinutes()-n.getMinutes()||e.getSeconds()-n.getSeconds()||e.getMilliseconds()-n.getMilliseconds();return i<0?-1:i>0?1:i}function mt(e,n){return Ki(e,pi(_i(e),1),n)}function ut(e){return tt(Date.now(),e)}const Ja="https://shop.app/shop-cash-terms",Xa="https://help.shop.app/shop",vt="https://help.shop.app/shop/shop-cash",ft=e=>{const{length:n}=e;if(n===0||e[0].event!==k.PENDING||e[n-1].event===k.PENDING)return e;const i=e.findIndex(r=>r.event===k.PENDING&&r.dateTime<e[n-1].dateTime),t=e.findIndex(r=>r.event!==k.PENDING),o=[...e];return i>-1&&o.splice(i,t-i),o.sort((r,s)=>s.dateTime.localeCompare(r.dateTime)),o},kt=(e,n,i=!1)=>{if(!n)return[];const t=new Date().getUTCFullYear();let o,r;return n.flatMap((a,d)=>{const l=new Date(a.dateTime),g=l.getUTCFullYear(),S=l.getUTCMonth(),y={activity:a};if(y.marginTop="space-12",g!==o||S!==r){const j=g===o||g===t?"MMMM":"MMMM, yyyy";return o=g,r=S,[{title:hi(e,l,j),variant:"bodySmall",marginTop:i&&d===0?"space-0":"space-32"},y]}return y.marginTop="space-16",y})};var x={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ShopCashActivityQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shopCashActivity"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"includePending"},value:{kind:"BooleanValue",value:!0}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cashbackPercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"money"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"expiresAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"event"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"isSpent"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resourceType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:731}};x.loc.source={body:`#import "../../../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../../../data/fragments/ReducedImageFragment.graphql"

query ShopCashActivityQuery($first: Int!, $after: String) {
  shopCashActivity(first: $first, after: $after, includePending: true) {
    nodes {
      id
      date
      dateTime
      cashbackPercentage
      money {
        ...MoneyV2Fragment
      }
      expiresAt
      event
      url
      order {
        id
        shop {
          id
          name
          visualTheme {
            id
            logoImage {
              ...ReducedImage
            }
          }
        }
      }
      isSpent
      resourceType
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Nn={};function Ni(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Nn[i]?!1:(Nn[i]=!0,!0)})}x.definitions=x.definitions.concat(Ni(gn.definitions));x.definitions=x.definitions.concat(Ni(w.definitions));function ee(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ee(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ee(t,n)}),e.definitions&&e.definitions.forEach(function(t){ee(t,n)})}var He={};(function(){x.definitions.forEach(function(n){if(n.name){var i=new Set;ee(n,i),He[n.name.value]=i}})})();function yn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function gt(e,n){var i={kind:e.kind,definitions:[yn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=He[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=He[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=yn(e,a);d&&i.definitions.push(d)}),i}gt(x,"ShopCashActivityQuery");const yi=h.createContext(null),St=()=>{const e=h.useContext(yi);if(e===null)throw new Error("no Activity screen context exists. Did you forget to wrap your screen in the <ActivityScreenProvider />?");return e},ht=({children:e,skip:n})=>{const{i18n:i}=be(),{userAuthState:t}=$i(),o=t!==qi.Anonymous,r=Si(),s=r==null?void 0:r.availableShopCashBalance,[a,d]=h.useState({amount:"0",currencyCode:(s==null?void 0:s.currencyCode)||"USD"});h.useEffect(()=>{s&&d({amount:s.amount,currencyCode:s.currencyCode})},[s==null?void 0:s.amount,s==null?void 0:s.currencyCode]);const{data:l,loading:g,networkStatus:S,error:y,refetch:j,fetchMore:B}=Li(x,{fetchPolicy:"cache-and-network",variables:{first:10},skip:n||!o}),_=h.useMemo(()=>{var Z;const D=(Z=l==null?void 0:l.shopCashActivity)==null?void 0:Z.nodes;if(!(D!=null&&D.length))return[];const W=ft(D);return kt(i.language,W,!0)},[l,i.language]),X=h.useMemo(()=>{var D;return(D=l==null?void 0:l.shopCashActivity)==null?void 0:D.pageInfo},[l]),Le=h.useCallback(()=>{const{hasNextPage:D,endCursor:W}=X??{},Z=S===Hi.fetchMore;D&&W&&!Z&&B({variables:{first:10,after:W},updateQuery:Mi("shopCashActivity")})},[X,S,B]),hn=h.useCallback(()=>{j()},[j]),Ti=h.useMemo(()=>({Activity:{items:_,pageInfo:X,loading:g,error:y,networkStatus:S,refetch:hn,fetchMore:Le,onEndReached:Le},Cash:{balance:a}}),[_,X,g,y,S,hn,Le,a]);return c.jsx(yi.Provider,{value:Ti,children:e})},pt=()=>{const{t:e}=be(),{reportEvent:n}=ji(),i=h.useCallback(()=>{n({schemaId:"shop_app_entity_interaction/4.4",payload:{entityType:Bi.ShopCashActivityEmptyState,entityId:"shop_cash_activity_empty_state",interactionType:Gi.ShopCashLearnMorePressed}})},[n]);return c.jsxs("div",{className:"flex size-full flex-col items-center justify-center gap-space-16 pb-space-16",children:[c.jsx(I,{variant:"bodySmall",className:"text-center text-text-tertiary",children:e("ShopCashRelaunchM3.ActivityEmptyState.Description")}),c.jsx(Ui,{variant:"tertiary",size:"s",to:vt,target:"_blank","data-testid":"shop-cash-help-centre-link",onClick:i,children:c.jsx(I,{variant:"buttonSmall",className:"px-space-8",children:e("ShopCashRelaunchM3.ActivityEmptyState.CtaButtonLabel")})})]})},Ft="yyyy-MM-dd",Nt=(e,n)=>{if(!at(e))return"-";const i=new Date;if(Ji(e))return n.yesterday;if(Xi(e))return n.today;if(mt(e))return n.tomorrow;let t;if(et(e,i)){const o=pn(Wi(i,2)),r=pn(pi(i,6));e<=o?t="MMM d":e<=r?t="eeee":t="MMM d"}else t="PP";return Vi(e,t)};var yt=rt();const Et=Oi(yt),wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAVFBMVEXDx9RHcEzIy9fLztrAw9HO0dzX2ePS1N7e4OjGydW5vMvo6u/4+fqwtMWkqbvY2uOVmrCHjaXc3ubT1N3k5uzt7vO6vs3v8PTt7vJ5f5XDxtRiZ3zuGmBAAAAAHHRSTlOyALKysrKysrKysrKysbEksrJbDpE6gXSZspayP+fYvgAAAAlwSFlzAAAhOAAAITgBRZYxYAAABrdJREFUeJyVmIt24joMRYUtPzN5QKBA5///8x7JjyRAu+541mo7kOwcHcm2HDr9Mtbb5X6/PjCu9/vltv52Lf0MuT/+DEPE8D7IiPFx/xn2A2i+D3/wbxCS90pyFsM/7vM/gG4PQfyRMZQhusAyydjwuP1PEDCxcfYDOB9sovQR9Qaar2LLnlNFDYUVLDG561uAr6CL2rvHqNnO+eC9CB18MMzkL7+C1jvuOnJ63gwltk5Y3hGzva8/g+aHZGjvTvG5Zc5xzuwlPojiY3h70E04IkduLy7VAlCQolIeMyrKW87s5s+gW6x6ID7GYUt8EQSTtJpoWhgfQR3b2yfQHEPwsWQmHkCbICE5m89TiDAqZzu/g+aHzAKpZuB8KYFY9FROA0HUcibUFEHT/ApaCwfDiFGH8cLBXEnTk72X6K7rC+iK67xEYsMR5P2eUxSBNJ5zId2PoMuBU+9EBptVcR9ZIf0FCbmj2x4Eg1wQR0zlBKtxdl3KqpGpJEPTX0aRd8ML6IpLJOVGHooJoVU3HJ2Kiqocawwtf9MuOAXdggiKQ3Kqnt3wbpHWauwgkPh5DltwVARhUsbBW+GkXAkHSAlYVqWmyKQMm3B5vjaQCsKNRZCddne+DKHrUmkEBJsIwY0qSUBXyEXOjHVCcuPySnHB9b9R0raR+LmEJgmg2QXr8Cwj8cttSz4wtrGRTJE0wm8LSbOCLlIaYbC2Xu3M2fUqrpbIaCxM/Ubi56SSLgJaTVCQsf3JeSmIDpK7GgukUDmJp7/G25zdCtCslYovbSeZZSy34JmMxSwTJWwgplwCkjM1tvwcpZbMDSBEhiuGtMl3Lj0NrsfSnKoX00QpdRTmRlFEfEZmNDY6fQNkXDR7kOXFMyf5f6k+yssEWYrC9yopCWh8amzXE63G2ZSiN7abKj8op8atdXweG0lyXE1qsfmVZoAoDWYD2QKaxDZntxlxhiaqmqItihQUYNJMN+vMOyjlCZPY9dgExc+RG8n32MQkLJUXgteJzaBSralFCz0ej/V7kknjk1UTPgweGHV7wswVt+lLQLaA2oC1Xqo0yryqIKPBdUlR9CA0gEzEqnQnJI0Yn+8G6oz05hCrQSLVNEklNltBI/YBSRtA6ArCHiRlE4pl3jc1dUZwzZy43UC8B0k6U79+4TYn2myoM+Kc9yD8XUCugjgXRUn9E4dsqqQ+GwpoaXmTktxCqyDUU/XOCCjxOFHqktzGSbR0t6NTTvfoIVmjjKylNgjPbSVsPdeAS653iqxykLXFFI8UlDpIvlMnVBE2+FQ5ZYoS7UCpgJyA7nSxAPEgvWEl8ZkbKJblI7X5sDDXioyqhxiTOUQtSEwR/B6qUlJQ5hqb7/bI4GmsK4uAiqB8xqajU2Qm2S5jqCCqoGqpLe4UrchmqSMpyHptPtvoGdstrWPNfwPxZqmV+tqSMGXVDBBa03rtuJgh6DJy0vzzYDZF084K1yLDx6PrXndBsGgoC9tJ3RaTOgjF2uZUqCTBjyFRj4xbZKZYJIs/i0mIrYGwWGXuwaGDNTITJiSlgVxsLiD5AyxysvgXk3gniRbEtq1hWEwMBU2T1oiAmiDspRrZqhukxhZ9OkrqxSTW2up5TSY3q89eI7uXLZud4RGSOkjt5lJMytpyJ6Bg94JkWytb9klnyYuksUhqNx84Ib8Iqk2E2G27pPIwFKySKB2HlnvuKUteBNnW1kgpQZKTxHEvgcwfUABtnGUqgh69Y5sJiRsPwWkxFRJ1GvwKrnBYAkNjb5nN1vqdvmTmjhxD6tHhgeNG6nI47zKGypBT0q6rRS1JcGlwUsOVhCLMO1HIfKBxxzHoAxGY37fHp5v4jZ5Zy7L5xHkce3xJaiRziwtLEwzCsc1ejkeIL6skt08dKwrtkfZI41gTqf7gqOWFQy9HiNOKuWRUk9scl1uEoaNHqRxpOmE0P14PNUpKLD4F0zVVVh094kn7Xns4ju4OfjBcNPGwn79vQ+SMONN5OdaGDwc/kHIhYf4E8xNF5EQ5lUp36XeH2v3heP1G60FiR/yIUsxkRY6lF87xuC4+2aRtLE4m5iVApHAascVKtyuO/XxclyogObIKSk5aYbPaBpzTcWrShl4+/vUFglpuxSlNOutZEHYkORUO2vFDsWDIv75neXvJsn6xoEhZcot03MEmq61hoZB5f4v04bXP/EV4cLkn9wqq27mYZa//57VPQbEpLDoWo+zoHzE/vxq7fJPpbV9ZimR7M/byL6/GZKxgcdk0SieBnfL7Mv/ry7oGu12+vr6+v/Hj8gtExn+uM2t0w/YSMAAAAABJRU5ErkJggg==",Ct=(e,n)=>{const i={yesterday:n("ShopCash.DateFormats.Common.Yesterday"),today:n("ShopCash.DateFormats.Common.Today"),tomorrow:n("ShopCash.DateFormats.Common.Tomorrow")};return Nt(e,i)};function Dt(e,n){let i=n;return Number.isNaN(n)&&(i=0),i.toLocaleString(e,{maximumFractionDigits:2,style:"percent"})}const Y={type:"local",source:Zi,backgroundColor:"bg-bg-fill-brand-secondary",opacity:1},xe={type:"local",source:wt,backgroundColor:"bg-bg-overlay-fixed-dark-04",opacity:1},Te=e=>{var n,i;if((i=(n=e.order)==null?void 0:n.shop.visualTheme)!=null&&i.logoImage)return{type:"remote",source:e.order.shop.visualTheme.logoImage,shopName:e.order.shop.name,opacity:1}};class C{constructor(n,i){this.pending=!1,this.activity=n,this.t=i.t,this.i18n=i}get formattedAmount(){return gi(this.activity.money,{locale:this.i18n.language})}get isNegativeAmount(){const n=Number(this.activity.money.amount);return isNaN(n)||n<0}get amountColor(){return Number(this.activity.money.amount)<=0?"text":"text-text-brand"}get titleColor(){return"text"}get formattedExpiresAt(){}get formattedDate(){const n=Ct(new Date(this.activity.dateTime),this.t);return Et(n)}}class Rt extends C{constructor(){super(...arguments),this.decal=Y,this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.BuyerCompensation",{formattedDate:this.formattedDate})}}class bt extends C{constructor(){var n;super(...arguments),this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Credited",{shopName:((n=this.activity.order)==null?void 0:n.shop.name)??"",formattedDate:this.formattedDate})}get decal(){return Te(this.activity)??Y}}class Ei extends C{constructor(){super(...arguments),this.DEFAULT_CASHBACK_PERCENTAGE=.01,this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned")}get decal(){return Te(this.activity)??Y}get details(){if(!this.activity.order)return this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Earned",{formattedDate:this.formattedDate});let n=Number(this.activity.cashbackPercentage);return isNaN(n)&&(n=this.DEFAULT_CASHBACK_PERCENTAGE),n>this.DEFAULT_CASHBACK_PERCENTAGE?this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EarnedMerchantCashbackPromotion",{shopName:this.activity.order.shop.name,formattedCashbackPercentage:Dt(this.i18n.language,n),formattedDate:this.formattedDate}):this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EarnedMerchant",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate})}}class At extends C{constructor(){super(...arguments),this.decal=Y,this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.EmployeeCompensation",{formattedDate:this.formattedDate})}}class It extends C{constructor(){super(...arguments),this.decal=xe,this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Expired")}get details(){return this.activity.resourceType===Fi.MARKETING_GIFT_REWARD?this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.ExpiredPromotion",{formattedDate:this.formattedDate}):this.formattedDate}get titleColor(){return"text-text-tertiary"}get amountColor(){return"text-text-tertiary"}}class xt extends C{constructor(){super(...arguments),this.decal=Y,this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned"),this.details=this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Gifted",{formattedDate:this.formattedDate})}get formattedExpiresAt(){const n=this.activity.expiresAt,i=this.activity.isSpent;if(!n||i)return;const t=new Date(n),o=new Date(t.valueOf()-t.getTimezoneOffset()*60*1e3),r=hi(this.i18n.language,ut(),Ft),s=ct(o,r);if(!(s<0))return s===0?this.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Today"):s===1?this.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Single",{numOfDays:s}):this.t("ShopCashRelaunchM3.ActivityList.Item.ExpiresAt.Multiple",{numOfDays:s})}}class En extends C{constructor(){super(...arguments),this.details=this.formattedDate}get decal(){return this.isNegativeAmount?xe:Y}get title(){return this.isNegativeAmount?this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Spent"):this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Earned")}}class Tt extends C{get decal(){const n=this.proxiedModel.decal;return n.opacity=.3,n}get title(){return this.proxiedModel.title}get titleColor(){return"text-text-placeholder"}get amountColor(){return this.isNegativeAmount?"text-text-tertiary":"text-text-brand-secondary"}get details(){var n;return(n=this.activity.order)!=null&&n.shop?this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.PendingMerchant",{shopName:this.activity.order.shop.name}):this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Pending")}constructor(n,i){super(n,i),this.proxiedModel=this.isNegativeAmount?new wi(n,i):new Ei(n,i)}}class wi extends C{constructor(){super(...arguments),this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Spent")}get decal(){return Te(this.activity)??xe}get details(){var n;return(n=this.activity.order)!=null&&n.shop?this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Redeemed",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate}):this.formattedDate}}class Pt extends C{constructor(){super(...arguments),this.title=this.t("ShopCashRelaunchM3.ActivityList.Item.Title.Reversed")}get decal(){return Te(this.activity)??xe}get details(){return this.activity.order?this.t("ShopCashRelaunchM3.ActivityList.Item.Detail.Refunded",{shopName:this.activity.order.shop.name,formattedDate:this.formattedDate}):this.formattedDate}}const Ot=(e,n)=>{switch(e.event){case k.BUYER_COMPENSATION:return new Rt(e,n);case k.CREDITED:return new bt(e,n);case k.EARNED:return new Ei(e,n);case k.EMPLOYEE_COMPENSATION:return new At(e,n);case k.EXPIRED:return new It(e,n);case k.GIFTED:return new xt(e,n);case k.OTHER:return new En(e,n);case k.PENDING:return new Tt(e,n);case k.REDEEMED:return new wi(e,n);case k.REFUNDED:return new Pt(e,n);default:return new En(e,n)}},Mt=({activity:e})=>{const{i18n:n}=be(),i=h.useMemo(()=>Ot(e,n),[e,n]),t=[i.title,i.formattedAmount,i.details].join(`
`);return c.jsxs("div",{className:"flex items-center gap-space-8","aria-label":t,children:[c.jsx($t,{decal:i.decal}),c.jsxs("div",{className:"flex flex-1",children:[c.jsx("div",{className:"flex-1",children:c.jsx(qt,{title:i.title,detail:i.details,color:i.titleColor})}),c.jsxs("div",{className:"flex flex-col items-end",children:[c.jsx(jt,{formattedAmount:i.formattedAmount,color:i.amountColor}),i.formattedExpiresAt?c.jsx(I,{variant:"caption",className:i.amountColor,children:i.formattedExpiresAt}):null]})]})]})},$t=({decal:e})=>e.type==="local"?c.jsx("div",{className:`flex size-space-44 items-center justify-center rounded-radius-12 border border-[#05294D]/10 ${e.backgroundColor}`,style:{opacity:e.opacity},children:c.jsx(zi,{src:e.source,alt:"",className:"size-space-24 object-contain"})}):c.jsx("div",{className:"aspect-square w-space-44",style:{opacity:e.opacity},children:c.jsx(Yi,{shopName:e.shopName,size:"m",src:e.source.url,alt:e.source.altText||e.shopName})}),qt=({title:e,detail:n,color:i="text"})=>c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsxs("div",{children:[c.jsx(I,{variant:"bodyTitleSmall",className:i,children:e}),c.jsx(I,{variant:"caption",className:"text-text-tertiary",children:n})]})}),jt=({formattedAmount:e,color:n="text"})=>c.jsx(I,{variant:"bodyTitleSmall",className:n,children:e}),Ci=()=>c.jsxs("div",{className:"flex items-center gap-space-8",children:[c.jsx("div",{className:"size-space-44 animate-pulse rounded-radius-12 bg-bg-fill-placeholder"}),c.jsxs("div",{className:"flex flex-1",children:[c.jsx("div",{className:"flex-1",children:c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsxs("div",{children:[c.jsx("div",{className:"mb-space-2 h-space-16 w-1/2 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),c.jsx("div",{className:"h-space-12 w-1/3 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"})]})})}),c.jsxs("div",{className:"flex flex-col items-end",children:[c.jsx("div",{className:"mb-space-2 h-space-16 w-space-64 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),c.jsx("div",{className:"h-space-12 w-space-48 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"})]})]})]}),Vt=e=>e.title!==void 0,Lt=({ctx:e})=>{const n=e.items,{onEndReached:i,pageInfo:t}=e,o=t==null?void 0:t.hasNextPage,r=h.useCallback((d,l)=>{const{title:g,variant:S,paddingTop:y,paddingBottom:j,marginTop:B,marginBottom:_}=d;return c.jsx("div",{className:"flex flex-col",style:{paddingTop:y?`var(--${y})`:void 0,paddingBottom:j?`var(--${j})`:void 0,marginTop:B?`var(--${B})`:void 0,marginBottom:_?`var(--${_})`:void 0},children:c.jsx(I,{variant:S,className:"pt-space-4 text-text-secondary",children:g})},`title-${l}`)},[]),s=h.useCallback((d,l)=>{const{activity:g,marginTop:S}=d;return c.jsx("div",{style:{marginTop:S?`var(--${S})`:void 0},children:c.jsx(Mt,{activity:g})},`activity-${g.id||l}`)},[]),a=h.useCallback((d,l)=>Vt(d)?r(d,l):s(d,l),[r,s]);return c.jsx(c.Fragment,{children:c.jsx("div",{className:"flex h-full flex-col overflow-auto pb-space-16 pr-space-16",style:{scrollbarWidth:"thin"},children:c.jsxs("div",{className:"flex flex-col gap-space-16",children:[n.map((d,l)=>a(d,l)),o&&i&&c.jsx(Qi,{onImpression:i,children:c.jsx("div",{className:"flex flex-col gap-space-16",children:c.jsx(Ci,{})})})]})})})},Ht=()=>c.jsx("span",{className:"inline-block h-space-16 w-space-64 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),Gt=()=>c.jsxs("div",{className:"flex flex-col gap-space-16 pb-space-16",children:[c.jsx("div",{className:"h-space-16 w-space-48 animate-pulse rounded-radius-4 bg-bg-fill-placeholder"}),Array.from({length:5}).map((e,n)=>c.jsx(Ci,{},n))]}),Wa=e=>c.jsx(ht,{skip:!e.open,children:c.jsx(Bt,{...e})}),Bt=e=>{const{i18n:n,t:i}=be(),{open:t,onOpenChange:o}=e,{availableShopCashBalance:r}=Si(),s=gi(r||{amount:"0",currencyCode:"USD"},{locale:n.language}),a=St(),d=a.Activity.items.length>0,l=a.Activity.loading&&!a.Activity.error,g=l?c.jsx(Gt,{}):d?c.jsx(Lt,{ctx:a.Activity}):c.jsx(pt,{}),S=l?c.jsx(Ht,{}):s;return c.jsx(Pi,{title:c.jsx(I,{variant:"sectionTitle",children:i("ShopCashRelaunchM3.Activity.Title")}),subtitle:S,content:g,open:t,onOpenChange:o,headerContentClassName:"pb-space-4",contentWrapperClassName:d&&!l?"pr-0":""})};var G={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ResourceAction"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ResourceAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]}]}}],loc:{start:0,end:67}};G.loc.source={body:`fragment ResourceAction on ResourceAction {
  label
  url
  icon
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ne(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ne(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ne(t,n)}),e.definitions&&e.definitions.forEach(function(t){ne(t,n)})}var Ge={};(function(){G.definitions.forEach(function(n){if(n.name){var i=new Set;ne(n,i),Ge[n.name.value]=i}})})();function wn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ut(e,n){var i={kind:e.kind,definitions:[wn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ge[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ge[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=wn(e,a);d&&i.definitions.push(d)}),i}Ut(G,"ResourceAction");var p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionGeneralHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionGeneralHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Label"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopProductReviewAnalytics"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashSubtitle"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalCashDestinationAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashCashbackIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ratePercentage"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FlatAmountCashbackOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cashbackAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"primaryAction"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotificationBadge"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fallbackText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"actions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OverflowAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopFollowAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"renderable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"VisualThemeLogoImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"horizontal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"vertical"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"componentStyle"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1641}};p.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"
#import "../../../data/fragments/VisualThemeLogoImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment SectionGeneralHeader on SectionGeneralHeader {
  title
  subtitle {
    ... on Label {
      text
      icon
    }
    ... on ShopProductReviewAnalytics {
      averageRating
      totalProductRatings
      totalProductReviews
    }
    ... on ShopCashSubtitle {
      summary
    }
    ... on ShopCashOffer {
      minimumOrderValue {
        ...MoneyV2Fragment
      }
      totalCashDestinationAmount {
        ...MoneyV2Fragment
      }
    }
    ... on ShopCashCashbackIncentive {
      ratePercentage
    }
    ... on FlatAmountCashbackOffer {
      cashbackAmount {
        ...MoneyV2Fragment
      }
      minimumOrderValue {
        ...MoneyV2Fragment
      }
    }
  }
  primaryAction {
    ...ResourceAction
    ... on NotificationBadge {
      label
      action {
        label
        url
      }
    }
  }
  logo {
    icon
    image {
      fallbackText
      image {
        ...ReducedImage
      }
    }
  }
  wordmark {
    ...ReducedImage
  }
  actions {
    ...ResourceAction
    ... on OverflowAction {
      label
    }
    ... on ShopFollowAction {
      label
      renderable
      shop {
        id
        name
        followedByMe
        visualTheme {
          ...VisualThemeLogoImage
        }
      }
    }
  }
  displayHints {
    contentHints {
      alignment {
        horizontal
        vertical
      }
    }
    subtitle {
      componentStyle
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Cn={};function Pe(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Cn[i]?!1:(Cn[i]=!0,!0)})}p.definitions=p.definitions.concat(Pe(w.definitions));p.definitions=p.definitions.concat(Pe(gn.definitions));p.definitions=p.definitions.concat(Pe(dt.definitions));p.definitions=p.definitions.concat(Pe(G.definitions));function ie(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ie(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ie(t,n)}),e.definitions&&e.definitions.forEach(function(t){ie(t,n)})}var Be={};(function(){p.definitions.forEach(function(n){if(n.name){var i=new Set;ie(n,i),Be[n.name.value]=i}})})();function Dn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Qt(e,n){var i={kind:e.kind,definitions:[Dn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Be[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Be[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Dn(e,a);d&&i.definitions.push(d)}),i}Qt(p,"SectionGeneralHeader");var V={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionGeneralHeader"},directives:[]}]}}],loc:{start:0,end:120}};V.loc.source={body:`#import "./SectionGeneralHeaderFragment.graphql"

fragment SectionHeader on SectionHeader {
  ...SectionGeneralHeader
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Rn={};function zt(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Rn[i]?!1:(Rn[i]=!0,!0)})}V.definitions=V.definitions.concat(zt(p.definitions));function te(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){te(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){te(t,n)}),e.definitions&&e.definitions.forEach(function(t){te(t,n)})}var Ue={};(function(){V.definitions.forEach(function(n){if(n.name){var i=new Set;te(n,i),Ue[n.name.value]=i}})})();function bn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Yt(e,n){var i={kind:e.kind,definitions:[bn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ue[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ue[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=bn(e,a);d&&i.definitions.push(d)}),i}Yt(V,"SectionHeader");var Oe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedSingleActionFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSingleActionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:95}};Oe.loc.source={body:`fragment FeedSingleActionFooter on FeedSingleActionFooter {
  action {
    label
    url
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ae(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ae(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ae(t,n)}),e.definitions&&e.definitions.forEach(function(t){ae(t,n)})}var Qe={};(function(){Oe.definitions.forEach(function(n){if(n.name){var i=new Set;ae(n,i),Qe[n.name.value]=i}})})();function An(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Kt(e,n){var i={kind:e.kind,definitions:[An(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Qe[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Qe[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=An(e,a);d&&i.definitions.push(d)}),i}Kt(Oe,"FeedSingleActionFooter");var Me={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PaginationFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PaginationSectionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextLabel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prevLabel"},arguments:[],directives:[]}]}}],loc:{start:0,end:81}};Me.loc.source={body:`fragment PaginationFooter on PaginationSectionFooter {
  nextLabel
  prevLabel
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function re(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){re(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){re(t,n)}),e.definitions&&e.definitions.forEach(function(t){re(t,n)})}var ze={};(function(){Me.definitions.forEach(function(n){if(n.name){var i=new Set;re(n,i),ze[n.name.value]=i}})})();function In(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function _t(e,n){var i={kind:e.kind,definitions:[In(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=ze[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=ze[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=In(e,a);d&&i.definitions.push(d)}),i}_t(Me,"PaginationFooter");var R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionFooter"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionFooter"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedSingleActionFooter"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"PaginationFooter"},directives:[]}]}}],loc:{start:0,end:187}};R.loc.source={body:`#import "./SingleActionFooterFragment.graphql"
#import "./PaginationFooterFragment.graphql"

fragment SectionFooter on SectionFooter {
  ...FeedSingleActionFooter
  ...PaginationFooter
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var xn={};function Di(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return xn[i]?!1:(xn[i]=!0,!0)})}R.definitions=R.definitions.concat(Di(Oe.definitions));R.definitions=R.definitions.concat(Di(Me.definitions));function de(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){de(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){de(t,n)}),e.definitions&&e.definitions.forEach(function(t){de(t,n)})}var Ye={};(function(){R.definitions.forEach(function(n){if(n.name){var i=new Set;de(n,i),Ye[n.name.value]=i}})})();function Tn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Jt(e,n){var i={kind:e.kind,definitions:[Tn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ye[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ye[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Tn(e,a);d&&i.definitions.push(d)}),i}Jt(R,"SectionFooter");var M={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedOverlayItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OverlayItem"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"kind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]}]}}],loc:{start:0,end:70}};M.loc.source={body:`fragment FeedOverlayItem on OverlayItem {
  kind
  label
  position
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function oe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){oe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){oe(t,n)}),e.definitions&&e.definitions.forEach(function(t){oe(t,n)})}var Ke={};(function(){M.definitions.forEach(function(n){if(n.name){var i=new Set;oe(n,i),Ke[n.name.value]=i}})})();function Pn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Xt(e,n){var i={kind:e.kind,definitions:[Pn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ke[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ke[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Pn(e,a);d&&i.definitions.push(d)}),i}Xt(M,"FeedOverlayItem");var T={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:315}};T.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductCard on ProductCard {
  displayHints {
    options
  }
  product {
    id
    ...ProductCard
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var On={};function Ri(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return On[i]?!1:(On[i]=!0,!0)})}T.definitions=T.definitions.concat(Ri(Ae.definitions));T.definitions=T.definitions.concat(Ri(M.definitions));function se(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){se(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){se(t,n)}),e.definitions&&e.definitions.forEach(function(t){se(t,n)})}var _e={};(function(){T.definitions.forEach(function(n){if(n.name){var i=new Set;se(n,i),_e[n.name.value]=i}})})();function Mn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Wt(e,n){var i={kind:e.kind,definitions:[Mn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=_e[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=_e[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Mn(e,a);d&&i.definitions.push(d)}),i}Wt(T,"FeedProductCard");var F={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedMerchantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MerchantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopNetwork"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopifyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inAppVisibilityStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"storeEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"featuredImages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BrandSettings"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"offers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:991}};F.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/BrandSettingsFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedMerchantCard on MerchantCard {
  displayHints {
    options
  }
  overlayItems {
    ...FeedOverlayItem
  }
  shop {
    id
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    websiteUrl
    shopifyId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
      featuredImages {
        ...ReducedImage
      }
      brandSettings {
        ...BrandSettings
      }
    }
    offers {
      ... on AutomaticDiscount {
        id
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var $n={};function $e(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return $n[i]?!1:($n[i]=!0,!0)})}F.definitions=F.definitions.concat($e(w.definitions));F.definitions=F.definitions.concat($e(Ie.definitions));F.definitions=F.definitions.concat($e(ot.definitions));F.definitions=F.definitions.concat($e(M.definitions));function le(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){le(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){le(t,n)}),e.definitions&&e.definitions.forEach(function(t){le(t,n)})}var Je={};(function(){F.definitions.forEach(function(n){if(n.name){var i=new Set;le(n,i),Je[n.name.value]=i}})})();function qn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Zt(e,n){var i={kind:e.kind,definitions:[qn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Je[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Je[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=qn(e,a);d&&i.definitions.push(d)}),i}Zt(F,"FeedMerchantCard");var f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductFocusedMerchantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductFocusedMerchantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"productCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopNetwork"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopifyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inAppVisibilityStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"storeEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashBackPromotion"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashBackPromotionFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"VisualTheme"},directives:[]}]}}]}}]}}],loc:{start:0,end:1076}};f.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/VisualThemeFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"
#import "../../../data/fragments/ShopCashBackPromotionFragment.graphql"
#import "./OverlayItemFragment.graphql"

fragment FeedProductFocusedMerchantCard on ProductFocusedMerchantCard {
  productCards {
    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  displayHints {
    options
  }
  shop {
    id
    name
    defaultHandle
    followedByMe
    shopNetwork
    shareUrl
    websiteUrl
    shopifyId
    nativeProductPagesEnabled
    inAppVisibilityStatus
    storeEligible
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    shopCashBackPromotion {
      ...ShopCashBackPromotionFragment
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    visualTheme {
      ...VisualTheme
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var jn={};function K(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return jn[i]?!1:(jn[i]=!0,!0)})}f.definitions=f.definitions.concat(K(Ae.definitions));f.definitions=f.definitions.concat(K(w.definitions));f.definitions=f.definitions.concat(K(st.definitions));f.definitions=f.definitions.concat(K(Ie.definitions));f.definitions=f.definitions.concat(K(lt.definitions));f.definitions=f.definitions.concat(K(M.definitions));function ce(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ce(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ce(t,n)}),e.definitions&&e.definitions.forEach(function(t){ce(t,n)})}var Xe={};(function(){f.definitions.forEach(function(n){if(n.name){var i=new Set;ce(n,i),Xe[n.name.value]=i}})})();function Vn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ea(e,n){var i={kind:e.kind,definitions:[Vn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Xe[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Xe[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Vn(e,a);d&&i.definitions.push(d)}),i}ea(f,"FeedProductFocusedMerchantCard");var U={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedActionCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ActionCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fontVariant"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}],loc:{start:0,end:232}};U.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedActionCard on ActionCard {
  displayHints {
    options
    fontVariant
  }
  action {
    label
    url
  }
  backgroundImage {
    ...ReducedImage
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Ln={};function na(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Ln[i]?!1:(Ln[i]=!0,!0)})}U.definitions=U.definitions.concat(na(w.definitions));function me(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){me(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){me(t,n)}),e.definitions&&e.definitions.forEach(function(t){me(t,n)})}var We={};(function(){U.definitions.forEach(function(n){if(n.name){var i=new Set;me(n,i),We[n.name.value]=i}})})();function Hn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ia(e,n){var i={kind:e.kind,definitions:[Hn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=We[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=We[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Hn(e,a);d&&i.definitions.push(d)}),i}ia(U,"FeedActionCard");var qe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedViewAllCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ViewAllCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:77}};qe.loc.source={body:`fragment FeedViewAllCard on ViewAllCard {
  action {
    url
    label
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ue(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ue(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ue(t,n)}),e.definitions&&e.definitions.forEach(function(t){ue(t,n)})}var Ze={};(function(){qe.definitions.forEach(function(n){if(n.name){var i=new Set;ue(n,i),Ze[n.name.value]=i}})})();function Gn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ta(e,n){var i={kind:e.kind,definitions:[Gn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=Ze[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=Ze[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Gn(e,a);d&&i.definitions.push(d)}),i}ta(qe,"FeedViewAllCard");var je={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedShopCashBalanceCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashBalanceContentNode"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"balance"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}],loc:{start:0,end:119}};je.loc.source={body:`fragment FeedShopCashBalanceCard on ShopCashBalanceContentNode {
  balance {
    amount
    currencyCode
  }
  title
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ve(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ve(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ve(t,n)}),e.definitions&&e.definitions.forEach(function(t){ve(t,n)})}var en={};(function(){je.definitions.forEach(function(n){if(n.name){var i=new Set;ve(n,i),en[n.name.value]=i}})})();function Bn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function aa(e,n){var i={kind:e.kind,definitions:[Bn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=en[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=en[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Bn(e,a);d&&i.definitions.push(d)}),i}aa(je,"FeedShopCashBalanceCard");var P={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductVariantCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductVariantCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"productVariant"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"compareAtPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"inDefaultProductList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:512}};P.loc.source={body:`#import "./OverlayItemFragment.graphql"
#import "../../../data/fragments/ProductCardFragment.graphql"

fragment FeedProductVariantCard on ProductVariantCard {
  displayHints {
    options
  }
  productVariant {
    id
    title
    price {
      currencyCode
      amount
    }
    compareAtPrice {
      currencyCode
      amount
    }
    inDefaultProductList

    product {
      id
      ...ProductCard
    }
  }
  overlayItems {
    ...FeedOverlayItem
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Un={};function bi(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Un[i]?!1:(Un[i]=!0,!0)})}P.definitions=P.definitions.concat(bi(M.definitions));P.definitions=P.definitions.concat(bi(Ae.definitions));function fe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){fe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){fe(t,n)}),e.definitions&&e.definitions.forEach(function(t){fe(t,n)})}var nn={};(function(){P.definitions.forEach(function(n){if(n.name){var i=new Set;fe(n,i),nn[n.name.value]=i}})})();function Qn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ra(e,n){var i={kind:e.kind,definitions:[Qn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=nn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=nn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Qn(e,a);d&&i.definitions.push(d)}),i}ra(P,"FeedProductVariantCard");var Ve={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShoppingEvent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEvent"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"destinationUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"giveaway"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eligibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isClaimable"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"knownVoucherAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"screenCustomizations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"screenName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"medium"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"discovery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topBannerEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topBannerOnExploreAndCategoryPagesEnabled"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"handle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"texts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bannerTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bannerSubtitles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expandedBannerTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expandedBannerSubtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countdownText"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:546}};Ve.loc.source={body:`fragment ShoppingEvent on ShoppingEvent {
  handle
  endDate
  destinationUrl
  giveaway {
    handle
    eligibility
    isClaimable
    knownVoucherAmount {
      amount
      currencyCode
    }
    screenCustomizations {
      name
      screenName
      medium
      value
    }
  }
  discovery {
    topBannerEnabled
    topBannerOnExploreAndCategoryPagesEnabled
  }
  media {
    handle
    url
    backgroundColor
  }
  texts {
    bannerTitle
    bannerSubtitles
    expandedBannerTitle
    expandedBannerSubtitle
    countdownText
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function ke(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ke(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ke(t,n)}),e.definitions&&e.definitions.forEach(function(t){ke(t,n)})}var tn={};(function(){Ve.definitions.forEach(function(n){if(n.name){var i=new Set;ke(n,i),tn[n.name.value]=i}})})();function zn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function da(e,n){var i={kind:e.kind,definitions:[zn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=tn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=tn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=zn(e,a);d&&i.definitions.push(d)}),i}da(Ve,"ShoppingEvent");var Q={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedShoppingEventCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEventCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shoppingEvent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEvent"},directives:[]}]}}]}}],loc:{start:0,end:142}};Q.loc.source={body:`#import "./ShoppingEventFragment.graphql"

fragment FeedShoppingEventCard on ShoppingEventCard {
  shoppingEvent {
    ...ShoppingEvent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Yn={};function oa(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Yn[i]?!1:(Yn[i]=!0,!0)})}Q.definitions=Q.definitions.concat(oa(Ve.definitions));function ge(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ge(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ge(t,n)}),e.definitions&&e.definitions.forEach(function(t){ge(t,n)})}var an={};(function(){Q.definitions.forEach(function(n){if(n.name){var i=new Set;ge(n,i),an[n.name.value]=i}})})();function Kn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function sa(e,n){var i={kind:e.kind,definitions:[Kn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=an[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=an[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Kn(e,a);d&&i.definitions.push(d)}),i}sa(Q,"FeedShoppingEventCard");var b={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedRichText"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RichText"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blockHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"horizontal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"vertical"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundStyle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formatOptions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lineSpacing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"maxLines"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"textDirection"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"segments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"fontVariant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"traits"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:468}};b.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment FeedRichText on RichText {
  blockHints {
    alignment {
      horizontal
      vertical
    }
    backgroundColor
    backgroundStyle
    formatOptions
    lineSpacing
    maxLines
    textDirection
  }
  segments {
    action {
      ...ResourceAction
    }
    fontVariant
    icon
    image {
      ...ReducedImage
    }
    text
    traits
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var _n={};function Ai(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return _n[i]?!1:(_n[i]=!0,!0)})}b.definitions=b.definitions.concat(Ai(w.definitions));b.definitions=b.definitions.concat(Ai(G.definitions));function Se(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Se(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Se(t,n)}),e.definitions&&e.definitions.forEach(function(t){Se(t,n)})}var rn={};(function(){b.definitions.forEach(function(n){if(n.name){var i=new Set;Se(n,i),rn[n.name.value]=i}})})();function Jn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function la(e,n){var i={kind:e.kind,definitions:[Jn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=rn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=rn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Jn(e,a);d&&i.definitions.push(d)}),i}la(b,"FeedRichText");var E={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedProductDetailsCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ProductDetailsCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCard"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"overlayItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOverlayItem"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"descriptors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedRichText"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:406}};E.loc.source={body:`#import "../../../data/fragments/ProductCardFragment.graphql"
#import "./OverlayItemFragment.graphql"
#import "./RichTextFragment.graphql"

fragment FeedProductDetailsCard on ProductDetailsCard {
  displayHints {
    options
  }
  product {
    id
    ...ProductCard
  }
  overlayItems {
    ...FeedOverlayItem
  }
  descriptors {
    ...FeedRichText
  }
  algorithm {
    name
    score
    version
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Xn={};function Sn(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Xn[i]?!1:(Xn[i]=!0,!0)})}E.definitions=E.definitions.concat(Sn(Ae.definitions));E.definitions=E.definitions.concat(Sn(M.definitions));E.definitions=E.definitions.concat(Sn(b.definitions));function he(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){he(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){he(t,n)}),e.definitions&&e.definitions.forEach(function(t){he(t,n)})}var dn={};(function(){E.definitions.forEach(function(n){if(n.name){var i=new Set;he(n,i),dn[n.name.value]=i}})})();function Wn(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ca(e,n){var i={kind:e.kind,definitions:[Wn(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=dn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=dn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=Wn(e,a);d&&i.definitions.push(d)}),i}ca(E,"FeedProductDetailsCard");var z={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedThreadCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ThreadCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"conversation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastUpdatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recentProductImages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}],loc:{start:0,end:216}};z.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment FeedThreadCard on ThreadCard {
  conversation {
    id
    title
    lastUpdatedAt
    recentProductImages {
      ...ReducedImage
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Zn={};function ma(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Zn[i]?!1:(Zn[i]=!0,!0)})}z.definitions=z.definitions.concat(ma(w.definitions));function pe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){pe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){pe(t,n)}),e.definitions&&e.definitions.forEach(function(t){pe(t,n)})}var on={};(function(){z.definitions.forEach(function(n){if(n.name){var i=new Set;pe(n,i),on[n.name.value]=i}})})();function ei(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ua(e,n){var i={kind:e.kind,definitions:[ei(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=on[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=on[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ei(e,a);d&&i.definitions.push(d)}),i}ua(z,"FeedThreadCard");var O={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedOrderDeliveryCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderDeliveryCard"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackedItem"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Delivery"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sellerName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveryFlags"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carrierInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"loading"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shippingMethod"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"paymentStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lineItems"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"deliveryStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markedAsDeliveredAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"markedAsDelivered"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveryType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etaInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"formattedEta"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"formattedEtaTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isFuture"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"effectiveTotalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalPriceAfterOfferApplied"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalItemCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"deliveredAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracker"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"carrierInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"events"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackerDeliveryEvent"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"happenedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopifyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:1688}};O.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/MoneyV2Fragment.graphql"

fragment FeedOrderDeliveryCard on OrderDeliveryCard {
  trackedItem {
    id
    ... on Delivery {
      id
      sellerName
      customName
      status
      deliveryFlags
      tracker {
        carrierInfo {
          id
          name
          imageUrl
        }
      }
    }
    ... on Order {
      __typename
      id
      name
      loading
      shippingMethod
      paymentStatus
      lineItems {
        nodes {
          id
          productTitle
          image {
            ...ReducedImage
          }
        }
      }
      deliveryStatus
      displayStatus
      markedAsDeliveredAt
      markedAsDelivered
      createdAt
      deliveryType
      etaInfo {
        formattedEta
        formattedEtaTime
        isFuture
      }
      effectiveTotalPrice {
        ...MoneyV2Fragment
      }
      totalPriceAfterOfferApplied {
        ...MoneyV2Fragment
      }
      totalPrice {
        ...MoneyV2Fragment
      }
      totalItemCount
      deliveries {
        nodes {
          id
          status
          deliveredAt
          tracker {
            carrierInfo {
              id
              imageUrl
              name
            }
          }
          events(last: 1) {
            nodes {
              ... on TrackerDeliveryEvent {
                happenedAt
                message
              }
            }
          }
        }
      }
      shop {
        id
        name
        shopifyId
        visualTheme {
          id
          logoImage {
            ...ReducedImage
          }
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ni={};function Ii(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ni[i]?!1:(ni[i]=!0,!0)})}O.definitions=O.definitions.concat(Ii(w.definitions));O.definitions=O.definitions.concat(Ii(gn.definitions));function Fe(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Fe(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Fe(t,n)}),e.definitions&&e.definitions.forEach(function(t){Fe(t,n)})}var sn={};(function(){O.definitions.forEach(function(n){if(n.name){var i=new Set;Fe(n,i),sn[n.name.value]=i}})})();function ii(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function va(e,n){var i={kind:e.kind,definitions:[ii(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=sn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=sn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ii(e,a);d&&i.definitions.push(d)}),i}va(O,"FeedOrderDeliveryCard");var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedContent"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContentNode"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedMerchantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductFocusedMerchantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedActionCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedViewAllCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedShopCashBalanceCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductVariantCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedShoppingEventCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedProductDetailsCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedRichText"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedThreadCard"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"FeedOrderDeliveryCard"},directives:[]}]}}],loc:{start:0,end:863}};m.loc.source={body:`#import "./ProductCardFragment.graphql"
#import "./MerchantCardFragment.graphql"
#import "./ProductFocusedMerchantCardFragment.graphql"
#import "./ActionCardFragment.graphql"
#import "./ViewAllCardFragment.graphql"
#import "./ShopCashBalanceCardFragment.graphql"
#import "./ProductVariantCardFragment.graphql"
#import "./ShoppingEventCardFragment.graphql"
#import "./ProductDetailsCardFragment.graphql"
#import "./RichTextFragment.graphql"
#import "./ThreadCardFragment.graphql"
#import "./OrderDeliveryCardFragment.graphql"

fragment FeedContent on ContentNode {
  ...FeedProductCard
  ...FeedMerchantCard
  ...FeedProductFocusedMerchantCard
  ...FeedActionCard
  ...FeedViewAllCard
  ...FeedShopCashBalanceCard
  ...FeedProductVariantCard
  ...FeedShoppingEventCard
  ...FeedProductDetailsCard
  ...FeedRichText
  ...FeedThreadCard
  ...FeedOrderDeliveryCard
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ti={};function N(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ti[i]?!1:(ti[i]=!0,!0)})}m.definitions=m.definitions.concat(N(T.definitions));m.definitions=m.definitions.concat(N(F.definitions));m.definitions=m.definitions.concat(N(f.definitions));m.definitions=m.definitions.concat(N(U.definitions));m.definitions=m.definitions.concat(N(qe.definitions));m.definitions=m.definitions.concat(N(je.definitions));m.definitions=m.definitions.concat(N(P.definitions));m.definitions=m.definitions.concat(N(Q.definitions));m.definitions=m.definitions.concat(N(E.definitions));m.definitions=m.definitions.concat(N(b.definitions));m.definitions=m.definitions.concat(N(z.definitions));m.definitions=m.definitions.concat(N(O.definitions));function Ne(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ne(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ne(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ne(t,n)})}var ln={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;Ne(n,i),ln[n.name.value]=i}})})();function ai(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function fa(e,n){var i={kind:e.kind,definitions:[ai(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=ln[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=ln[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ai(e,a);d&&i.definitions.push(d)}),i}fa(m,"FeedContent");var L={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionDisplayHints"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionDisplayHints"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"backgroundMedia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"source"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Image"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Video"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previewImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"dominantCoverColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"overlayColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColorHsl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sensitive"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"grouped"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"options"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"experimentalOptions"},arguments:[],directives:[]}]}}],loc:{start:0,end:499}};L.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"

fragment SectionDisplayHints on SectionDisplayHints {
  backgroundMedia {
    source {
      ... on Image {
        ...ReducedImage
      }
      ... on Video {
        url
        previewImage {
          ...ReducedImage
        }
      }
    }
  }
  dominantCoverColor
  overlayColor
  backgroundColorHsl
  wordmark {
    url
    altText
    sensitive
  }
  grouped
  options
  contentHints {
    options
  }
  experimentalOptions
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ri={};function ka(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ri[i]?!1:(ri[i]=!0,!0)})}L.definitions=L.definitions.concat(ka(w.definitions));function ye(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){ye(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){ye(t,n)}),e.definitions&&e.definitions.forEach(function(t){ye(t,n)})}var cn={};(function(){L.definitions.forEach(function(n){if(n.name){var i=new Set;ye(n,i),cn[n.name.value]=i}})})();function di(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ga(e,n){var i={kind:e.kind,definitions:[di(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=cn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=cn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=di(e,a);d&&i.definitions.push(d)}),i}ga(L,"SectionDisplayHints");var J={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSectionMetaData"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sectionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subSectionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemTypes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recommendationContext"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"algorithm"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sectionGid"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"domain"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modelId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modelName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scope"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:256}};J.loc.source={body:`fragment SectionMetadata on FeedSectionMetaData {
  sectionId
  subSectionId
  itemTypes
  itemSize
  recommendationContext
  algorithm {
    name
    score
    version
  }
  sectionGid {
    attributes
    domain
    modelId
    modelName
    scope
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function Ee(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ee(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ee(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ee(t,n)})}var mn={};(function(){J.definitions.forEach(function(n){if(n.name){var i=new Set;Ee(n,i),mn[n.name.value]=i}})})();function oi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Sa(e,n){var i={kind:e.kind,definitions:[oi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=mn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=mn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=oi(e,a);d&&i.definitions.push(d)}),i}Sa(J,"SectionMetadata");var A={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShopSubject"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopSubject"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopifyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoDominant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverDominant"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"websiteUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"myshopifyDomain"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:694}};A.loc.source={body:`#import "../../../data/fragments/ReducedImageFragment.graphql"
#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment ShopSubject on ShopSubject {
  subjectId
  subjectKind
  shop {
    id
    shopifyId
    followedByMe
    name
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
    defaultHandle
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
      brandSettings {
        id
        colors {
          id
          logoDominant
          coverDominant
        }
      }
    }
    shopCashIncentive {
      ...ShopCashIncentiveFragment
    }
    websiteUrl
    myshopifyDomain
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var si={};function xi(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return si[i]?!1:(si[i]=!0,!0)})}A.definitions=A.definitions.concat(xi(w.definitions));A.definitions=A.definitions.concat(xi(Ie.definitions));function we(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){we(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){we(t,n)}),e.definitions&&e.definitions.forEach(function(t){we(t,n)})}var un={};(function(){A.definitions.forEach(function(n){if(n.name){var i=new Set;we(n,i),un[n.name.value]=i}})})();function li(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ha(e,n){var i={kind:e.kind,definitions:[li(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=un[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=un[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=li(e,a);d&&i.definitions.push(d)}),i}ha(A,"ShopSubject");var H={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SectionUnderlay"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SectionUnderlay"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashIncentiveUnderlay"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"incentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:244}};H.loc.source={body:`#import "../../../data/fragments/ShopCashIncentiveFragment.graphql"

fragment SectionUnderlay on SectionUnderlay {
  ... on ShopCashIncentiveUnderlay {
    action {
      url
    }
    incentive {
      ...ShopCashIncentiveFragment
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ci={};function pa(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ci[i]?!1:(ci[i]=!0,!0)})}H.definitions=H.definitions.concat(pa(Ie.definitions));function Ce(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Ce(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Ce(t,n)}),e.definitions&&e.definitions.forEach(function(t){Ce(t,n)})}var vn={};(function(){H.definitions.forEach(function(n){if(n.name){var i=new Set;Ce(n,i),vn[n.name.value]=i}})})();function mi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Fa(e,n){var i={kind:e.kind,definitions:[mi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=vn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=vn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=mi(e,a);d&&i.definitions.push(d)}),i}Fa(H,"SectionUnderlay");var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ListSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ListSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemsPerRow"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:833}};u.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ListSection on ListSection {
  id
  itemsPerRow
  displayHints {
    ...SectionDisplayHints
  }
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  action {
    ...ResourceAction
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ui={};function $(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ui[i]?!1:(ui[i]=!0,!0)})}u.definitions=u.definitions.concat($(V.definitions));u.definitions=u.definitions.concat($(R.definitions));u.definitions=u.definitions.concat($(m.definitions));u.definitions=u.definitions.concat($(L.definitions));u.definitions=u.definitions.concat($(J.definitions));u.definitions=u.definitions.concat($(A.definitions));u.definitions=u.definitions.concat($(H.definitions));u.definitions=u.definitions.concat($(G.definitions));function De(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){De(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){De(t,n)}),e.definitions&&e.definitions.forEach(function(t){De(t,n)})}var fn={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;De(n,i),fn[n.name.value]=i}})})();function vi(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Na(e,n){var i={kind:e.kind,definitions:[vi(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=fn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=fn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=vi(e,a);d&&i.definitions.push(d)}),i}Na(u,"ListSection");var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShelfSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShelfSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"itemsInView"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:835}};v.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionUnderlayFragment.graphql"
#import "./ResourceActionFragment.graphql"

fragment ShelfSection on ShelfSection {
  id
  displayHints {
    ...SectionDisplayHints
  }
  header {
    ...SectionHeader
  }
  footer {
    ...SectionFooter
  }
  underlay {
    ...SectionUnderlay
  }
  metadata {
    ...SectionMetadata
  }
  action {
    ...ResourceAction
  }
  itemsInView
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  items(after: $itemsAfter) {
    nodes {
      ...FeedContent
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var fi={};function q(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return fi[i]?!1:(fi[i]=!0,!0)})}v.definitions=v.definitions.concat(q(V.definitions));v.definitions=v.definitions.concat(q(R.definitions));v.definitions=v.definitions.concat(q(m.definitions));v.definitions=v.definitions.concat(q(L.definitions));v.definitions=v.definitions.concat(q(J.definitions));v.definitions=v.definitions.concat(q(A.definitions));v.definitions=v.definitions.concat(q(H.definitions));v.definitions=v.definitions.concat(q(G.definitions));function Re(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Re(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Re(t,n)}),e.definitions&&e.definitions.forEach(function(t){Re(t,n)})}var kn={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;Re(n,i),kn[n.name.value]=i}})})();function ki(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ya(e,n){var i={kind:e.kind,definitions:[ki(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=kn[n]||new Set,o=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var s=r;r=new Set,s.forEach(function(a){if(!o.has(a)){o.add(a);var d=kn[a]||new Set;d.forEach(function(l){r.add(l)})}})}return o.forEach(function(a){var d=ki(e,a);d&&i.definitions.push(d)}),i}ya(v,"ShelfSection");export{Wa as A,vt as S,u as a,V as b,R as c,v as d,m as e,J as f,A as g,L as h,G as i,H as j,Ve as k,Ja as l,Xa as m,Et as n,Dt as o};
//# sourceMappingURL=ShelfSectionFragment-DN_G5Qoj.js.map
