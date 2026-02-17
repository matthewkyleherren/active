import{r as y}from"./chunk-EPOLDU6W-CsjFHsfv.js";import{u as Te}from"./useActions-D1I6hey3.js";import{u as qe}from"./updatePaginatedQuery-BO2WB4Mm.js";import{c as Oe}from"./useMonorail-CKSKmKQz.js";import{b as Ce,c as xe,e as Ie,f as Ve,g as Qe,h as Ae,i as Pe,j as Le,a as Me,d as Ge,k as je}from"./ShelfSectionFragment-DN_G5Qoj.js";import{t as ze,h as Ue,f as _e,e as Xe}from"./toFeedSection-Cc4OOTuV.js";import{u as Be}from"./useTranslation-DI_2-mvA.js";import{u as Ke}from"./useQuery-C4mkQZ1K.js";import{N as Q}from"./ObservableQuery-C0Qdj_tN.js";var $e=(e=>(e.INVALID_ARGUMENTS="INVALID_ARGUMENTS",e.SESSION_EXPIRED="SESSION_EXPIRED",e))($e||{}),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SingleSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SingleSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayHints"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionDisplayHints"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionFooter"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"underlay"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionUnderlay"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SectionMetadata"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subjectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subjectKind"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShopSubject"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"action"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ResourceAction"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"item"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedContent"},directives:[]}]}}]}}],loc:{start:0,end:727}};c.loc.source={body:`#import "./SectionHeaderFragment.graphql"
#import "./SectionFooterFragment.graphql"
#import "./FeedContentFragment.graphql"
#import "./SectionMetadataFragment.graphql"
#import "./ShopSubjectFragment.graphql"
#import "./SectionDisplayHintsFragment.graphql"
#import "./ResourceActionFragment.graphql"
#import "./SectionUnderlayFragment.graphql"

fragment SingleSection on SingleSection {
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
  subject {
    subjectId
    subjectKind
    ...ShopSubject
  }
  action {
    ...ResourceAction
  }
  item {
    ...FeedContent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ue={};function k(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ue[i]?!1:(ue[i]=!0,!0)})}c.definitions=c.definitions.concat(k(Ce.definitions));c.definitions=c.definitions.concat(k(xe.definitions));c.definitions=c.definitions.concat(k(Ie.definitions));c.definitions=c.definitions.concat(k(Ve.definitions));c.definitions=c.definitions.concat(k(Qe.definitions));c.definitions=c.definitions.concat(k(Ae.definitions));c.definitions=c.definitions.concat(k(Pe.definitions));c.definitions=c.definitions.concat(k(Le.definitions));function E(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){E(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){E(t,n)}),e.definitions&&e.definitions.forEach(function(t){E(t,n)})}var A={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;E(n,i),A[n.name.value]=i}})})();function me(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Je(e,n){var i={kind:e.kind,definitions:[me(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=A[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=A[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=me(e,r);a&&i.definitions.push(a)}),i}Je(c,"SingleSection");var u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedSection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedSection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ListSection"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShelfSection"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"SingleSection"},directives:[]}]}}],loc:{start:0,end:218}};u.loc.source={body:`#import "./ListSectionFragment.graphql"
#import "./ShelfSectionFragment.graphql"
#import "./SingleSectionFragment.graphql"

fragment FeedSection on FeedSection {
  ...ListSection
  ...ShelfSection
  ...SingleSection
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ve={};function _(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ve[i]?!1:(ve[i]=!0,!0)})}u.definitions=u.definitions.concat(_(Me.definitions));u.definitions=u.definitions.concat(_(Ge.definitions));u.definitions=u.definitions.concat(_(c.definitions));function w(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){w(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){w(t,n)}),e.definitions&&e.definitions.forEach(function(t){w(t,n)})}var P={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;w(n,i),P[n.name.value]=i}})})();function ke(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function We(e,n){var i={kind:e.kind,definitions:[ke(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=P[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=P[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=ke(e,r);a&&i.definitions.push(a)}),i}We(u,"FeedSection");var q={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CategoryFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CategoryFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breadcrumbs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Label"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ResourceAction"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categoryGid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasChildren"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canonicalUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:249}};q.loc.source={body:`fragment CategoryFeedHeader on CategoryFeedHeader {
  breadcrumbs {
    ... on Label {
      text
    }
    ... on ResourceAction {
      label
      url
    }
  }
  title
  category {
    name
    categoryGid
    hasChildren
    canonicalUrl
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function b(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){b(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){b(t,n)}),e.definitions&&e.definitions.forEach(function(t){b(t,n)})}var L={};(function(){q.definitions.forEach(function(n){if(n.name){var i=new Set;b(n,i),L[n.name.value]=i}})})();function Se(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ye(e,n){var i={kind:e.kind,definitions:[Se(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=L[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=L[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=Se(e,r);a&&i.definitions.push(a)}),i}Ye(q,"CategoryFeedHeader");var O={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TextFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TextFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}],loc:{start:0,end:54}};O.loc.source={body:`fragment TextFeedHeader on TextFeedHeader {
  title
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function D(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){D(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){D(t,n)}),e.definitions&&e.definitions.forEach(function(t){D(t,n)})}var M={};(function(){O.definitions.forEach(function(n){if(n.name){var i=new Set;D(n,i),M[n.name.value]=i}})})();function ge(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function Ze(e,n){var i={kind:e.kind,definitions:[ge(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=M[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=M[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=ge(e,r);a&&i.definitions.push(a)}),i}Ze(O,"TextFeedHeader");var g={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ShoppingEventFeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ShoppingEventFeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shoppingEvent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEvent"},directives:[]}]}}]}}],loc:{start:0,end:150}};g.loc.source={body:`#import "./ShoppingEventFragment.graphql"

fragment ShoppingEventFeedHeader on ShoppingEventFeedHeader {
  shoppingEvent {
    ...ShoppingEvent
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var pe={};function en(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return pe[i]?!1:(pe[i]=!0,!0)})}g.definitions=g.definitions.concat(en(je.definitions));function $(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){$(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){$(t,n)}),e.definitions&&e.definitions.forEach(function(t){$(t,n)})}var G={};(function(){g.definitions.forEach(function(n){if(n.name){var i=new Set;$(n,i),G[n.name.value]=i}})})();function he(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function nn(e,n){var i={kind:e.kind,definitions:[he(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=G[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=G[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=he(e,r);a&&i.definitions.push(a)}),i}nn(g,"ShoppingEventFeedHeader");var m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeedHeader"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FeedHeader"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CategoryFeedHeader"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"TextFeedHeader"},directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ShoppingEventFeedHeader"},directives:[]}]}}],loc:{start:0,end:254}};m.loc.source={body:`#import "./CategoryFeedHeaderFragment.graphql"
#import "./TextFeedHeaderFragment.graphql"
#import "./ShoppingEventFeedHeaderFragment.graphql"

fragment FeedHeader on FeedHeader {
  ...CategoryFeedHeader
  ...TextFeedHeader
  ...ShoppingEventFeedHeader
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var Fe={};function X(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return Fe[i]?!1:(Fe[i]=!0,!0)})}m.definitions=m.definitions.concat(X(q.definitions));m.definitions=m.definitions.concat(X(O.definitions));m.definitions=m.definitions.concat(X(g.definitions));function R(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){R(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){R(t,n)}),e.definitions&&e.definitions.forEach(function(t){R(t,n)})}var j={};(function(){m.definitions.forEach(function(n){if(n.name){var i=new Set;R(n,i),j[n.name.value]=i}})})();function Ne(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function tn(e,n){var i={kind:e.kind,definitions:[Ne(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=j[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=j[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=Ne(e,r);a&&i.definitions.push(a)}),i}tn(m,"FeedHeader");var v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Feed"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Feed"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedHeader"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FeedSection"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"errors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:321}};v.loc.source={body:`#import "./FeedSectionFragment.graphql"
#import "./FeedHeaderFragment.graphql"

fragment Feed on Feed {
  id
  header {
    ...FeedHeader
  }
  sections(first: $first, after: $after) {
    nodes {
      ...FeedSection
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  errors {
    code
    message
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ye={};function Re(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return ye[i]?!1:(ye[i]=!0,!0)})}v.definitions=v.definitions.concat(Re(u.definitions));v.definitions=v.definitions.concat(Re(m.definitions));function H(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){H(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){H(t,n)}),e.definitions&&e.definitions.forEach(function(t){H(t,n)})}var z={};(function(){v.definitions.forEach(function(n){if(n.name){var i=new Set;H(n,i),z[n.name.value]=i}})})();function Ee(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function an(e,n){var i={kind:e.kind,definitions:[Ee(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=z[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=z[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=Ee(e,r);a&&i.definitions.push(a)}),i}an(v,"Feed");var p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FeedQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"args"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemsAfter"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"feed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"args"},value:{kind:"Variable",name:{kind:"Name",value:"args"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"Feed"},directives:[]}]}}]}}],loc:{start:0,end:192}};p.loc.source={body:`#import "./FeedFragment.graphql"

query FeedQuery(
  $id: ID!
  $args: String
  $first: Int!
  $after: String
  $itemsAfter: String
) {
  feed(id: $id, args: $args) {
    id
    ...Feed
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var we={};function rn(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return we[i]?!1:(we[i]=!0,!0)})}p.definitions=p.definitions.concat(rn(v.definitions));function T(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){T(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){T(t,n)}),e.definitions&&e.definitions.forEach(function(t){T(t,n)})}var U={};(function(){p.definitions.forEach(function(n){if(n.name){var i=new Set;T(n,i),U[n.name.value]=i}})})();function be(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function on(e,n){var i={kind:e.kind,definitions:[be(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=U[n]||new Set,d=new Set,o=new Set;for(t.forEach(function(r){o.add(r)});o.size>0;){var s=o;o=new Set,s.forEach(function(r){if(!d.has(r)){d.add(r);var a=U[r]||new Set;a.forEach(function(f){o.add(f)})}})}return d.forEach(function(r){var a=be(e,r);a&&i.definitions.push(a)}),i}on(p,"FeedQuery");function De(e){return e==null?void 0:e.some(n=>n.code===$e.SESSION_EXPIRED)}function Sn({id:e,pageSize:n=10,moreSize:i=6,queryOptions:t,args:d,fetchPolicy:o="cache-first"}){var ee,ne,ie,te,ae,re,oe;const{i18n:s,t:r}=Be(),{data:a,loading:f,networkStatus:h,refetch:B,fetchMore:He,error:K}=Ke(p,{fetchPolicy:o,variables:{id:e,args:d,first:n},notifyOnNetworkStatusChange:!0,...t}),{isLoggedIn:J}=Oe(),F=y.useMemo(()=>{var l,N;return ze({sections:(N=(l=a==null?void 0:a.feed)==null?void 0:l.sections)==null?void 0:N.nodes,options:{isLoggedIn:J},t:r,locale:s.language})},[(ne=(ee=a==null?void 0:a.feed)==null?void 0:ee.sections)==null?void 0:ne.nodes,J,r,s.language]),C=h===Q.refetch,W=!!(f&&h!==Q.fetchMore&&!C&&!(F!=null&&F.length)),x=y.useRef(!1),Y=!!((ae=(te=(ie=a==null?void 0:a.feed)==null?void 0:ie.sections)==null?void 0:te.pageInfo)!=null&&ae.hasNextPage),{send:I}=Te(()=>({async fetchMore(){var de,ce,se,fe,le;if(!((se=(ce=(de=a==null?void 0:a.feed)==null?void 0:de.sections)==null?void 0:ce.pageInfo)!=null&&se.endCursor)||h===Q.fetchMore||x.current)return;const{hasNextPage:l,endCursor:N}=(fe=a==null?void 0:a.feed)==null?void 0:fe.sections.pageInfo;if(l&&N){x.current=!0;const{data:V}=await He({variables:{id:e,first:i,after:N},updateQuery:qe("feed.sections")}).finally(()=>{x.current=!1});De((le=V==null?void 0:V.feed)==null?void 0:le.errors)&&B()}},refetch(){B()}}));y.useEffect(()=>{var l;De((l=a==null?void 0:a.feed)==null?void 0:l.errors)&&I.refetch()});const S=(re=a==null?void 0:a.feed)!=null&&re.header&&Ue(a.feed.header)?a.feed.header:void 0,Z=S&&(_e(S)||Xe(S))?S.title:void 0;return y.useMemo(()=>{var l;return{loading:W,error:K,hasNextPage:Y,sections:F,feedId:((l=a==null?void 0:a.feed)==null?void 0:l.id)||void 0,refetching:C,networkStatus:h,queryActions:I,header:S,title:Z}},[W,K,Y,F,(oe=a==null?void 0:a.feed)==null?void 0:oe.id,C,h,I,S,Z])}export{Sn as u};
//# sourceMappingURL=useFeedQuery-CzPMBH9y.js.map
