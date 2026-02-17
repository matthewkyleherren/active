import{d as g}from"./MoneyV2Fragment-XdlHnX2E.js";var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SellingPlanAllocationFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanAllocation"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"priceAdjustments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"compareAtPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"perDeliveryPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"sellingPlan"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recurringDeliveries"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billingPolicy"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanRecurringBillingPolicy"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"interval"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"intervalCount"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"deliveryPolicy"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanRecurringDeliveryPolicy"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"interval"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"intervalCount"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"priceAdjustments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"orderCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"adjustmentValue"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanPercentagePriceAdjustment"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adjustmentPercentage"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanFixedPriceAdjustment"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SellingPlanFixedAmountPriceAdjustment"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"adjustmentAmount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MoneyV2Fragment"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:1165}};m.loc.source={body:`#import "./MoneyV2Fragment.graphql"

fragment SellingPlanAllocationFragment on SellingPlanAllocation {
  priceAdjustments {
    price {
      ...MoneyV2Fragment
      __typename
    }
    compareAtPrice {
      ...MoneyV2Fragment
      __typename
    }
    perDeliveryPrice {
      ...MoneyV2Fragment
      __typename
    }
  }
  sellingPlan {
    id
    name
    recurringDeliveries
    billingPolicy {
      __typename
      ... on SellingPlanRecurringBillingPolicy {
        interval
        intervalCount
      }
    }
    deliveryPolicy {
      __typename
      ... on SellingPlanRecurringDeliveryPolicy {
        interval
        intervalCount
      }
    }
    priceAdjustments {
      orderCount
      adjustmentValue {
        __typename
        ... on SellingPlanPercentagePriceAdjustment {
          adjustmentPercentage
        }
        ... on SellingPlanFixedPriceAdjustment {
          price {
            ...MoneyV2Fragment
            __typename
          }
        }
        ... on SellingPlanFixedAmountPriceAdjustment {
          adjustmentAmount {
            ...MoneyV2Fragment
            __typename
          }
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var u={};function S(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return u[i]?!1:(u[i]=!0,!0)})}m.definitions=m.definitions.concat(S(g.definitions));function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var o={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;c(n,i),o[n.name.value]=i}})})();function v(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function f(e,n){var i={kind:e.kind,definitions:[v(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=o[n]||new Set,r=new Set,t=new Set;for(a.forEach(function(l){t.add(l)});t.size>0;){var d=t;t=new Set,d.forEach(function(l){if(!r.has(l)){r.add(l);var s=o[l]||new Set;s.forEach(function(k){t.add(k)})}})}return r.forEach(function(l){var s=v(e,l);s&&i.definitions.push(s)}),i}f(m,"SellingPlanAllocationFragment");function F(e){const r=e.toLowerCase().trim().replace(/['′'`´]/g,"").replace(/[^a-z0-9\s-]/g," ").replace(/\s+/g," ").trim().split(" ").filter(d=>d.length>0).slice(0,13);let t=r.join("-");if(t.length>80){t="";for(const d of r){const l=t?`${t}-${d}`:d;if(l.length<=80)t=l;else{!t&&d.length>80&&(t=d.slice(0,80));break}}}return t=t.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),t}export{m as d,F as g};
//# sourceMappingURL=slug-Ba9JY7r4.js.map
