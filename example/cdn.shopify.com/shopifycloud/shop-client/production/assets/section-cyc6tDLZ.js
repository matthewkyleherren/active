import{d as M}from"./MoneyV2Fragment-XdlHnX2E.js";var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AdMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopAdMetadata"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adResponseId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"campaignCountryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"campaignHandle"},arguments:[],directives:[]}]}}],loc:{start:0,end:105}};m.loc.source={body:`fragment AdMetadata on ShopAdMetadata {
  adResponseId
  adType
  campaignCountryCode
  campaignHandle
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var v={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;c(n,i),v[n.name.value]=i}})})();function k(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function C(e,n){var i={kind:e.kind,definitions:[k(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=v[n]||new Set,o=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!o.has(t)){o.add(t);var r=v[t]||new Set;r.forEach(function(f){d.add(f)})}})}return o.forEach(function(t){var r=k(e,t);r&&i.definitions.push(r)}),i}C(m,"AdMetadata");var s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShopCashIncentiveFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"totalCashDestinationAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adDisplayType"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShopCashCashbackIncentive"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"maxApplicableOrderAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"ratePercentage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FlatAmountCashbackOffer"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AdMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"cashbackAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"minimumOrderValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"adDisplayType"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:909}};s.loc.source={body:`#import "../fragments/MoneyV2Fragment.graphql"
#import "../fragments/AdMetadataFragment.graphql"

fragment ShopCashIncentiveFragment on ShopCashIncentive {
  ... on ShopCashOffer {
    # Note: do not include \`id\` field here, or the apollo InMemoryCache will not recognize the full objects as unique on a per-shop basis, breaking unique ad reporting
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    totalCashDestinationAmount {
      ...MoneyV2Fragment
    }
    adMetadata {
      ...AdMetadata
    }
    adDisplayType
  }

  ... on ShopCashCashbackIncentive {
    maxApplicableOrderAmount {
      ...MoneyV2Fragment
    }
    ratePercentage
    adMetadata {
      ...AdMetadata
    }
  }

  ... on FlatAmountCashbackOffer {
    adMetadata {
      ...AdMetadata
    }
    cashbackAmount {
      ...MoneyV2Fragment
    }
    minimumOrderValue {
      ...MoneyV2Fragment
    }
    adDisplayType
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var p={};function g(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return p[i]?!1:(p[i]=!0,!0)})}s.definitions=s.definitions.concat(g(M.definitions));s.definitions=s.definitions.concat(g(m.definitions));function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,n)}),e.definitions&&e.definitions.forEach(function(a){l(a,n)})}var S={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),S[n.name.value]=i}})})();function h(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function b(e,n){var i={kind:e.kind,definitions:[h(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=S[n]||new Set,o=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!o.has(t)){o.add(t);var r=S[t]||new Set;r.forEach(function(f){d.add(f)})}})}return o.forEach(function(t){var r=h(e,t);r&&i.definitions.push(r)}),i}b(s,"ShopCashIncentiveFragment");var y=(e=>(e.ListSection="ListSection",e.ShelfSection="ShelfSection",e.SingleSection="SingleSection",e))(y||{}),F=(e=>(e.ShopCashIncentiveUnderlay="ShopCashIncentiveUnderlay",e))(F||{}),N=(e=>(e.ShopSubject="ShopSubject",e))(N||{});function w(e){return e.__typename in y}function D(e){return e.__typename==="ShelfSection"}function I(e){return e.__typename==="ListSection"}function V(e){return e.__typename==="SingleSection"}function E(e){return e.__typename==="SingleSection"}function O(e){return e.__typename in N}function _(e){return e.__typename==="ShopSubject"}function R(e){return e.__typename===F.ShopCashIncentiveUnderlay}export{y as F,V as a,I as b,D as c,s as d,O as e,m as f,E as g,_ as h,w as i,R as j};
//# sourceMappingURL=section-cyc6tDLZ.js.map
