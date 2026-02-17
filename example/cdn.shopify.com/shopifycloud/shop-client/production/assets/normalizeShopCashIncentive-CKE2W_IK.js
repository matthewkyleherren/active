import{u as w,r as V}from"./chunk-EPOLDU6W-CsjFHsfv.js";import{d as M}from"./MoneyV2Fragment-XdlHnX2E.js";import{d as O}from"./ReducedImageFragment-CkTGK3vJ.js";import{d as L}from"./section-cyc6tDLZ.js";import{d as f}from"./FilterUtils-8PUBFIQ_.js";import{o as q}from"./omit-CxViilmz.js";import{f as p}from"./MoneyUtils-CsZiXqQZ.js";var I=(e=>(e.AMOUNTS_HIDDEN="AMOUNTS_HIDDEN",e.AMOUNTS_VISIBLE="AMOUNTS_VISIBLE",e))(I||{});const Z="e_469d2c79",ee="e_748e545d",ne="e_cc563b4a",ie="e_9891a3f4",te="e_29a21f4f",ae="e_dada2ec9",re="e_832bfb70",se="v_11937282",oe="v_01381f59",de="v_b3602da1",ce="v_857ff460",ue="v_29d2575d",me="v_151ee815",le="v_3bef3537",fe="v_6da6c433";function x({handle:e,experiments:n}){const i=n==null?void 0:n.find(s=>s.startsWith(e));if(!i)return;const[,t]=i.split("=");return t}const ve=(e,n)=>{const i=w("root"),t=i==null?void 0:i.flags;return V.useMemo(()=>t&&x({handle:e,experiments:t==null?void 0:t.experiments})||n,[e,t,n])};var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AutomaticDiscount"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"constraints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"discountClass"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountPercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discountType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"minimumRequirementAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumRequirementQuantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"minimumRequirementType"},arguments:[],directives:[]}]}}],loc:{start:0,end:373}};u.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment AutomaticDiscount on AutomaticDiscount {
  id
  constraints {
    text
    type
  }
  description
  shortDescription
  discountAmount {
    ...MoneyV2Fragment
  }
  discountClass
  discountPercentage
  discountType
  minimumRequirementAmount {
    ...MoneyV2Fragment
  }
  minimumRequirementQuantity
  minimumRequirementType
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var A={};function $(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return A[i]?!1:(A[i]=!0,!0)})}u.definitions=u.definitions.concat($(M.definitions));function k(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){k(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){k(t,n)}),e.definitions&&e.definitions.forEach(function(t){k(t,n)})}var N={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;k(n,i),N[n.name.value]=i}})})();function _(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function X(e,n){var i={kind:e.kind,definitions:[_(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=N[n]||new Set,s=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var m=r;r=new Set,m.forEach(function(a){if(!s.has(a)){s.add(a);var o=N[a]||new Set;o.forEach(function(l){r.add(l)})}})}return s.forEach(function(a){var o=_(e,a);o&&i.definitions.push(o)}),i}X(u,"AutomaticDiscount");var c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductCardWithoutShopCash"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscoveryProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"numberOfVariants"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"inDefaultProductList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isProductDiscoveryEligible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublishedToOnlineStoreChannel"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isRestricted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultVariantId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shareUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"offers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AutomaticDiscount"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AutomaticDiscount"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"originalPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currencyCode"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"reviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"defaultHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nativeProductPagesEnabled"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shopifyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"followedByMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visualTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"productReviewAnalytics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalProductReviews"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalProductRatings"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"averageRating"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:898}};c.loc.source={body:`#import "./AutomaticDiscountFragment.graphql"
#import "./ReducedImageFragment.graphql"

fragment ProductCardWithoutShopCash on DiscoveryProduct {
  id
  title
  slug
  numberOfVariants
  inDefaultProductList
  isProductDiscoveryEligible
  isPublishedToOnlineStoreChannel
  isRestricted
  referral
  defaultVariantId
  shareUrl
  offers {
    id
    ... on AutomaticDiscount {
      ...AutomaticDiscount
    }
  }
  price {
    amount
    currencyCode
  }
  originalPrice {
    amount
    currencyCode
  }
  url
  images {
    ...ReducedImage
  }
  reviewAnalytics {
    averageRating
    count
  }
  shop {
    id
    name
    defaultHandle
    nativeProductPagesEnabled
    shopifyId
    followedByMe
    visualTheme {
      id
      logoImage {
        ...ReducedImage
      }
    }
    productReviewAnalytics {
      totalProductReviews
      totalProductRatings
      averageRating
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var R={};function b(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return R[i]?!1:(R[i]=!0,!0)})}c.definitions=c.definitions.concat(b(u.definitions));c.definitions=c.definitions.concat(b(O.definitions));function g(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){g(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){g(t,n)}),e.definitions&&e.definitions.forEach(function(t){g(t,n)})}var F={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;g(n,i),F[n.name.value]=i}})})();function P(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function W(e,n){var i={kind:e.kind,definitions:[P(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=F[n]||new Set,s=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var m=r;r=new Set,m.forEach(function(a){if(!s.has(a)){s.add(a);var o=F[a]||new Set;o.forEach(function(l){r.add(l)})}})}return s.forEach(function(a){var o=P(e,a);o&&i.definitions.push(o)}),i}W(c,"ProductCardWithoutShopCash");var d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ProductCard"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"DiscoveryProduct"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ProductCardWithoutShopCash"},directives:[]},{kind:"Field",name:{kind:"Name",value:"shopCashIncentive"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShopCashIncentiveFragment"},directives:[]}]}}]}}],loc:{start:0,end:325}};d.loc.source={body:`#import "./AutomaticDiscountFragment.graphql"
#import "./ReducedImageFragment.graphql"
#import "./ProductCardWithoutShopCashFragment.graphql"
#import "./ShopCashIncentiveFragment.graphql"

fragment ProductCard on DiscoveryProduct {
  ...ProductCardWithoutShopCash
  shopCashIncentive {
    ...ShopCashIncentiveFragment
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var C={};function h(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return C[i]?!1:(C[i]=!0,!0)})}d.definitions=d.definitions.concat(h(u.definitions));d.definitions=d.definitions.concat(h(O.definitions));d.definitions=d.definitions.concat(h(c.definitions));d.definitions=d.definitions.concat(h(L.definitions));function S(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){S(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){S(t,n)}),e.definitions&&e.definitions.forEach(function(t){S(t,n)})}var E={};(function(){d.definitions.forEach(function(n){if(n.name){var i=new Set;S(n,i),E[n.name.value]=i}})})();function D(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function H(e,n){var i={kind:e.kind,definitions:[D(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=E[n]||new Set,s=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var m=r;r=new Set,m.forEach(function(a){if(!s.has(a)){s.add(a);var o=E[a]||new Set;o.forEach(function(l){r.add(l)})}})}return s.forEach(function(a){var o=D(e,a);o&&i.definitions.push(o)}),i}H(d,"ProductCard");var v=(e=>(e[e.ImmediateDiscount=0]="ImmediateDiscount",e[e.EarnShopCash=1]="EarnShopCash",e))(v||{});function ke({cashType:e,formattedBoostedCash:n,t:i}){switch(e){case v.ImmediateDiscount:return{offerText:i("ShopCash.ExclusiveOffers.XOff",{amount:n}),accessibilityLabel:i("ShopCash.Worth",{formattedBoostedCash:n})};case v.EarnShopCash:return{offerText:i("ShopCash.ExclusiveOffers.EarnFlat",{formattedBoostedCash:n}),accessibilityLabel:i("ShopCash.ExclusiveOffers.EarnFlatA11y",{formattedBoostedCash:n})};default:return{offerText:n,accessibilityLabel:n}}}function ge(e){switch(e==null?void 0:e.__typename){case"ShopCashOffer":case"FlatAmountCashbackOffer":return e.adDisplayType===I.AMOUNTS_HIDDEN;case"ShopCashCashbackIncentive":case"SponsoredAd":case"":case void 0:return!1}}const T={minimumFractionDigits:0},U=["minimumOrderValue","remainingAmountToMeetMinimumOrderValue"];function y(e){if(e===null)return null;const{boostedCash:n,minimumOrderValue:i,remainingAmountToMeetMinimumOrderValue:t}=e,s=f(i)?{minimumOrderValue:i,formattedMinimumOrderValue:p(i,T)}:{},r=f(t)?{remainingAmountToMeetMinimumOrderValue:t,formattedRemainingAmountToMeetMinimumOrderValue:p(t)}:{};return{...q(e,U),formattedBoostedCash:p(n,T),...s,...r}}var G=(e=>(e[e.Supported=0]="Supported",e[e.Skip=1]="Skip",e))(G||{});function Se(e,n=1){switch(e==null?void 0:e.__typename){case"ShopCashOffer":{const i=e.totalCashDestinationAmount;if(!f(i)&&n!==0)return null;const t=y({...e,boostedCash:i??{amount:"",currencyCode:""}});return f(t)?{boosted:{...t,cashType:v.ImmediateDiscount}}:null}case"ShopCashCashbackIncentive":return{cashback:e};case"FlatAmountCashbackOffer":{const i=e.cashbackAmount,t=y({...e,boostedCash:i??{amount:"",currencyCode:""}});return f(t)?{boosted:{...t,cashType:v.EarnShopCash}}:null}default:return null}}export{v as C,me as E,G as H,u as a,ee as b,ne as c,d,ie as e,fe as f,ke as g,ge as h,le as i,se as j,c as k,Z as l,ae as m,Se as n,te as o,de as p,oe as q,ce as r,ue as s,x as t,ve as u,re as v};
//# sourceMappingURL=normalizeShopCashIncentive-CKE2W_IK.js.map
