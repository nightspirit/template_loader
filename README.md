# Template Loader
Simple and Tiny html template loader

# Dependency
- jquery (1.8+)

# Basic usage
In html
```html
<!-- Inline template's innerHTML is not empty -->
<template id="foo"> inline template </template>
<!-- Remote template has src attribute -->
<template id="foo2" src="url"></template>
```
In javascript
```javascript
// template function exposes to global scope
template('Template ID').then(function(tmpl_html){
  // do something
});

template([IDs...]).then(function(partials){
  // html fragments in array order by input template ids
});
```
# Tips
- Template will be cached once it retrieved.
- Always expect the result as promise, even though they are already be cached and solved. (Don't worry the cached promise will be triggered right away.)
