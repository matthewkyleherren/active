import{d as p}from"./ReducedImageFragment-CkTGK3vJ.js";var s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BrandSettings"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BrandSettings"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"primary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"secondary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"secondaryText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"statusBarStyle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoAverage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoDominant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverDominant"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"headerTheme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"thumbnailImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbhash"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"wordmark"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"videoUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startingScrimColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endingScrimColor"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:612}};s.loc.source={body:`#import "./ReducedImageFragment.graphql"

fragment BrandSettings on BrandSettings {
  id
  colors {
    id
    primary
    secondary
    secondaryText
    statusBarStyle
    logoAverage
    logoDominant
    coverDominant
  }
  logos {
    id
    logoImage {
      ...ReducedImage
      thumbhash
    }
  }
  headerTheme {
    id
    coverImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    thumbnailImage {
      ...ReducedImage
      thumbhash
      __typename
    }
    wordmark {
      ...ReducedImage
      __typename
    }
    videoUrl
    startingScrimColor
    endingScrimColor
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var N={};function E(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return N[i]?!1:(N[i]=!0,!0)})}s.definitions=s.definitions.concat(E(p.definitions));function f(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){f(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){f(a,n)}),e.definitions&&e.definitions.forEach(function(a){f(a,n)})}var k={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;f(n,i),k[n.name.value]=i}})})();function y(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function b(e,n){var i={kind:e.kind,definitions:[y(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=k[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var c=d;d=new Set,c.forEach(function(t){if(!m.has(t)){m.add(t);var r=k[t]||new Set;r.forEach(function(u){d.add(u)})}})}return m.forEach(function(t){var r=y(e,t);r&&i.definitions.push(r)}),i}b(s,"BrandSettings");var l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"VisualThemeLogoImage"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"VisualTheme"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}}]}}],loc:{start:0,end:162}};l.loc.source={body:`#import "./ReducedImageFragment.graphql"

fragment VisualThemeLogoImage on VisualTheme {
  __typename
  id
  logoImage {
    __typename
    ...ReducedImage
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var R={};function T(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return R[i]?!1:(R[i]=!0,!0)})}l.definitions=l.definitions.concat(T(p.definitions));function v(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){v(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){v(a,n)}),e.definitions&&e.definitions.forEach(function(a){v(a,n)})}var S={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;v(n,i),S[n.name.value]=i}})})();function w(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function _(e,n){var i={kind:e.kind,definitions:[w(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=S[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var c=d;d=new Set,c.forEach(function(t){if(!m.has(t)){m.add(t);var r=S[t]||new Set;r.forEach(function(u){d.add(u)})}})}return m.forEach(function(t){var r=w(e,t);r&&i.definitions.push(r)}),i}_(l,"VisualThemeLogoImage");var o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"VisualTheme"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"VisualTheme"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ReducedImage"},directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"VisualThemeLogoImage"},directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"brandSettings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BrandSettings"},directives:[]}]}}]}}],loc:{start:0,end:299}};o.loc.source={body:`#import "./ReducedImageFragment.graphql"
#import "./BrandSettingsFragment.graphql"
#import "./VisualThemeLogoImageFragment.graphql"

fragment VisualTheme on VisualTheme {
  id
  heroImage {
    ...ReducedImage
  }
  ...VisualThemeLogoImage
  description
  brandSettings {
    ...BrandSettings
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var I={};function F(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return I[i]?!1:(I[i]=!0,!0)})}o.definitions=o.definitions.concat(F(p.definitions));o.definitions=o.definitions.concat(F(s.definitions));o.definitions=o.definitions.concat(F(l.definitions));function g(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){g(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){g(a,n)}),e.definitions&&e.definitions.forEach(function(a){g(a,n)})}var h={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;g(n,i),h[n.name.value]=i}})})();function D(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function V(e,n){var i={kind:e.kind,definitions:[D(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=h[n]||new Set,m=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var c=d;d=new Set,c.forEach(function(t){if(!m.has(t)){m.add(t);var r=h[t]||new Set;r.forEach(function(u){d.add(u)})}})}return m.forEach(function(t){var r=D(e,t);r&&i.definitions.push(r)}),i}V(o,"VisualTheme");export{s as a,l as b,o as d};
//# sourceMappingURL=VisualThemeFragment-BDzcZ-HS.js.map
