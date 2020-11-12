import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  public changelog = `
# 11.0.0 (2020-11-11)

### Bug Fixes

* **compiler:** ensure that i18n message-parts have the correct source-span ([#39486](https://github.com/angular/angular/issues/39486)) ([63f9e16](https://github.com/angular/angular/commit/63f9e16))
* **compiler:** skipping leading whitespace should not break placeholder source-spans ([#39486](https://github.com/angular/angular/issues/39486)) ([b8e9b3d](https://github.com/angular/angular/commit/b8e9b3d)), closes [#39195](https://github.com/angular/angular/issues/39195)
* **compiler-cli:** avoid duplicate diagnostics about unknown pipes ([#39517](https://github.com/angular/angular/issues/39517)) ([c68ca49](https://github.com/angular/angular/commit/c68ca49))
* **compiler-cli:** do not drop non-Angular decorators when downleveling ([#39577](https://github.com/angular/angular/issues/39577)) ([f51cf29](https://github.com/angular/angular/commit/f51cf29)), closes [#39574](https://github.com/angular/angular/issues/39574)
* **core:** Access injected parent values using SelfSkip ([#39464](https://github.com/angular/angular/issues/39464)) ([7cb9e19](https://github.com/angular/angular/commit/7cb9e19))
* **elements:** update the view of an \`OnPush\` component when inputs change ([#39452](https://github.com/angular/angular/issues/39452)) ([dd28855](https://github.com/angular/angular/commit/dd28855)), closes
* **common:** change the week-numbering year format from \`r\` -> \`Y\` ([#39495](https://github.com/angular/angular/issues/39495)) ([feda78e](https://github.com/angular/angular/commit/feda78e))
* **compiler:** preserve this.$event and this.$any accesses in expressions ([#39323](https://github.com/angular/angular/issues/39323)) ([a8e0db7](https://github.com/angular/angular/commit/a8e0db7)), closes [#30278](https://github.com/angular/angular/issues/30278)
* **compiler-cli:** generating invalid setClassMetadata call in ES5 for class with custom decorator ([#39527](https://github.com/angular/angular/issues/39527)) ([b0bbc1f](https://github.com/angular/angular/commit/b0bbc1f)), closes [#39509](https://github.com/angular/angular/issues/39509)
* **compiler-cli:** report missing pipes when \`fullTemplateTypeCheck\` is disabled ([#39320](https://github.com/angular/angular/issues/39320)) ([67ea7b6](https://github.com/angular/angular/commit/67ea7b6)), closes [#38195](https://github.com/angular/angular/issues/38195)
* **core:** markDirty() should only mark flags when really scheduling tick. ([#39316](https://github.com/angular/angular/issues/39316)) ([3b6497b](https://github.com/angular/angular/commit/3b6497b)), closes [#39296](https://github.com/angular/angular/issues/39296)
* **forms:** remove validators while cleaning up a control ([#39234](https://github.com/angular/angular/issues/39234)) ([43b4940](https://github.com/angular/angular/commit/43b4940))
* **router:** Ensure all outlets are used when commands have a prefix ([#39456](https://github.com/angular/angular/issues/39456)) ([b2f3952](https://github.com/angular/angular/commit/b2f3952))
* **bazel:** only providing stamping information if the --stamp flag is used ([#39392](https://github.com/angular/angular/issues/39392)) ([84e09a0](https://github.com/angular/angular/commit/84e09a0))

### Features

* **core:** add automated migration to replace async with waitForAsync ([#39212](https://github.com/angular/angular/issues/39212)) ([5ce71e0](https://github.com/angular/angular/commit/5ce71e0))
* **core:** add automated migration to replace ViewEncapsulation.Native ([#38882](https://github.com/angular/angular/issues/38882)) ([0e733f3](https://github.com/angular/angular/commit/0e733f3))
* **core:** add initialNavigation schematic ([#36926](https://github.com/angular/angular/issues/36926)) ([0ec7043](https://github.com/angular/angular/commit/0ec7043))
* **core:** add Trusted Types workaround for Function constructor ([#39209](https://github.com/angular/angular/issues/39209)) ([5913e5c](https://github.com/angular/angular/commit/5913e5c))
* **core:** create internal Trusted Types module ([#39207](https://github.com/angular/angular/issues/39207)) ([0875fd2](https://github.com/angular/angular/commit/0875fd2))
* **core:** depend on type definitions for Trusted Types ([#39207](https://github.com/angular/angular/issues/39207)) ([c4266fb](https://github.com/angular/angular/commit/c4266fb))
* **core:** remove ViewEncapsulation.Native ([#38882](https://github.com/angular/angular/issues/38882)) ([4a1c12c](https://github.com/angular/angular/commit/4a1c12c))
* **language-service:** [Ivy] getSemanticDiagnostics for external templates ([#39065](https://github.com/angular/angular/issues/39065)) ([63624a2](https://github.com/angular/angular/commit/63624a2))
* **language-service:** Add getTypeDefinitionAtPosition (go to type definition) ([#39145](https://github.com/angular/angular/issues/39145)) ([a84976f](https://github.com/angular/angular/commit/a84976f))
* **language-service:** Add module name to directive quick info ([#39121](https://github.com/angular/angular/issues/39121)) ([4604fe9](https://github.com/angular/angular/commit/4604fe9))
* **router:** add new initialNavigation options to replace legacy ([#37480](https://github.com/angular/angular/issues/37480)) ([c4becca](https://github.com/angular/angular/commit/c4becca))
* **compiler-cli:** support getting resource dependencies for a source file ([#38048](https://github.com/angular/angular/issues/38048)) ([5dbf357](https://github.com/angular/angular/commit/5dbf357))
* **forms:** add migration for AbstractControl.parent accesses ([#39009](https://github.com/angular/angular/issues/39009)) ([aeec223](https://github.com/angular/angular/commit/aeec223)), closes [#32671](https://github.com/angular/angular/issues/32671)

### Performance Improvements

* **compiler-cli:** only generate template context declaration when used ([#39321](https://github.com/angular/angular/issues/39321)) ([1ac0500](https://github.com/angular/angular/commit/1ac0500))
* **core:** do not recurse into modules that have already been registered ([#39514](https://github.com/angular/angular/issues/39514)) ([5c13c67](https://github.com/angular/angular/commit/5c13c67)), closes [#39487](https://github.com/angular/angular/issues/39487)
* **compiler-cli:** only emit directive/pipe references that are used ([#38539](https://github.com/angular/angular/issues/38539)) ([077f516](https://github.com/angular/angular/commit/077f516))
* **compiler-cli:** optimize computation of type-check scope information ([#38539](https://github.com/angular/angular/issues/38539)) ([297c060](https://github.com/angular/angular/commit/297c060))
* **router:** use \`ngDevMode\` to tree-shake error messages in router ([#38674](https://github.com/angular/angular/issues/38674)) ([db21c4f](https://github.com/angular/angular/commit/db21c4f))


### BREAKING CHANGES

* **platform-server:** If you use \`useAbsoluteUrl\` to setup \`platform-server\`, you now need to
also specify \`baseUrl\`.
We are intentionally making this a breaking change in a minor release,
because if \`useAbsoluteUrl\` is set to \`true\` then the behavior of the
application could be unpredictable, resulting in issues that are hard to
discover but could be affecting production environments.
* **compiler:** TypeScript 3.9 is no longer supported, please upgrade to TypeScript 4.0.
* **router:** * The \`initialNavigation\` property for the options in
  \`RouterModule.forRoot\` no longer supports \`legacy_disabled\`,
  \`legacy_enabled\`, \`true\`, or \`false\` as valid values.
  \`legacy_enabled\` (the old default) is instead \`enabledNonBlocking\`
* \`enabled\` is deprecated as a valid value for the
  \`RouterModule.forRoot\` \`initialNavigation\` option. \`enabledBlocking\`
  has been introduced to replace it
* **router:** preserveQueryParams has been removed, use
queryParamsHandling="preserve" instead
* **router:**  If you were accessing the \`RouterLink\` values of \`queryParams\`,
\`fragment\` or \`queryParamsHandling\` you might need to relax the typing to also
accept \`undefined\` and \`null\`. ([#39151](https://github.com/angular/angular/issues/39151))
* **core:** * \`ViewEncapsulation.Native\` has been removed. Use \`ViewEncapsulation.ShadowDom\` instead. Existing
usages will be updated automatically by \`ng update\`.
* **compiler-cli:** Expressions within ICUs are now type-checked again, fixing a regression
in Ivy. This may cause compilation failures if errors are found in
expressions that appear within an ICU. Please correct these expressions
to resolve the type-check errors.
* **forms:** Directives in the \`@angular/forms\` package used to have \`any[]\` as a type of \`validators\` and
\`asyncValidators\` arguments in constructors. Now these arguments are properly typed, so if your
code relies on directive constructor types it may require some updates to improve type safety.
* **forms:** Type of AbstractFormControl.parent now includes null. \`null\` is now included in the types of .parent. If you don't already have a check for this case,
the TypeScript compiler might complain. A v11 migration exists which adds the non-null assertion
operator where necessary. In an unlikely case your code was testing the parent against undefined with strict equality,
you'll need to change this to \`=== null\` instead, since the parent is now explicitly initialized
with \`null\` instead of being left \`undefined\`.
* **packaging:** In v10, IE 9, 10, and IE mobile support was deprecated. In v11, Angular framework removes IE 9,
10, and IE mobile support completely.
Supporting outdated browsers like these increases bundle size, code complexity, and test load,
and also requires time and effort that could be spent on improvements to the framework.
For example, fixing issues can be more difficult, as a straightforward fix for modern browsers
could break old ones that have quirks due to not receiving updates from vendors.
* **platform-webworker:** @angular/platform-webworker and @angular/platform-webworker-dynamic
have been removed as they were deprecated in v8
* **common:** The \`slice\` pipe now returns \`null\` for the \`undefined\` input value,
which is consistent with the behavior of most pipes. If you rely on
\`undefined\` being the result in that case, you now need to check for it
explicitly.
* **common:** The typing of the \`keyvalue\` pipe has been fixed to report that for
input objects that have \`number\` keys, the result will contain the
string representation of the keys. This was already the case and the
code has simply been updated to reflect this. Please update the
consumers of the pipe output if they were relying on the incorrect
types. Note that this does not affect use cases where the input values
are \`Map\`s, so if you need to preserve \`number\`s, this is an effective
way.
* **common:** The signatures of the number pipes now explicitly state which types are
accepted. This should only cause issues in corner cases, as any other
values would result in runtime exceptions.
* **common:** The signature of the \`date\` pipe now explicitly states which types are
accepted. This should only cause issues in corner cases, as any other
values would result in runtime exceptions.
* **common:** The async pipe no longer claims to return \`undefined\` for an input that
was typed as \`undefined\`. Note that the code actually returned \`null\` on
\`undefined\` inputs. In the unlikely case you were relying on this,
please fix the typing of the consumers of the pipe output.
* **common:** The case conversion pipes no longer let falsy values through. They now
map both \`null\` and \`undefined\` to \`null\` and raise an exception on
invalid input (\`0\`, \`false\`, \`NaN\`) just like most "common pipes". If
your code required falsy values to pass through, you need to handle them
explicitly.
* **router:** While the new parameter types allow a variable of type
\`NavigationExtras\` to be passed in, they will not allow object literals,
as they may only specify known properties. They will also not accept
types that do not have properties in common with the ones in the \`Pick\`.
To fix this error, only specify properties from the \`NavigationExtras\` which are
actually used in the respective function calls or use a type assertion
on the object or variable: \`as NavigationExtras\`.
* **router:** This commit changes the default value of
\`relativeLinkResolution\` from \`'legacy'\` to \`'default'\`. If your
application previously used the default by not specifying a value in the
\`ExtraOptions\` and uses relative links when navigating from children of
empty path routes, you will need to update your \`RouterModule\` to
specifically specify \`'legacy'\` for \`relativeLinkResolution\`.
See https://angular.io/api/router/ExtraOptions#relativeLinkResolution
for more details.
* **core:** If you call \`TestBed.overrideProvider\` after TestBed initialization, provider overrides are not applied. This
behavior is consistent with other override methods (such as \`TestBed.overrideDirective\`, etc) but they
throw an error to indicate that, when the check was missing in the \`TestBed.overrideProvider\` function.
Now calling \`TestBed.overrideProvider\` after TestBed initialization also triggers an
error, thus there is a chance that some tests (where \`TestBed.overrideProvider\` is
called after TestBed initialization) will start to fail and require updates to move \`TestBed.overrideProvider\` calls
before TestBed initialization is completed.
* **router:** This change corrects the argument order when calling
RouteReuseStrategy#shouldReuseRoute. Previously, when evaluating child
routes, they would be called with the future and current arguments would
be swapped. If your RouteReuseStrategy relies specifically on only the future
or current snapshot state, you may need to update the shouldReuseRoute
implementation's use of "future" and "current" ActivateRouteSnapshots.
* **common:** The locale data API has been marked as returning readonly arrays, rather
than mutable arrays, since these arrays are shared across calls to the
API. If you were mutating them (e.g. calling \`sort()\`, \`push()\`, \`splice()\`, etc)
then your code will not longer compile. If you need to mutate the array, you
should now take a copy (e.g. by calling \`slice()\`) and mutate the copy.
* **common:** When passing a date-time formatted string to the \`DatePipe\` in a format that contains
fractions of a millisecond, the milliseconds will now always be rounded down rather than
to the nearest millisecond. Most applications will not be affected by this change. If this is not the desired behaviour
then consider pre-processing the string to round the millisecond part before passing
it to the \`DatePipe\`.
* **core:** CollectionChangeRecord has been removed, use IterableChangeRecord instead
* **forms:** Previously if FormControl, FormGroup and FormArray class instances had async validators
defined at initialization time, the status change event was not emitted once async validator
completed. After this change the status event is emitted into the \`statusChanges\` observable.
If your code relies on the old behavior, you can filter/ignore this additional status change
event.


### Code Refactoring

* **compiler:** remove support for TypeScript 3.9 ([#39313](https://github.com/angular/angular/issues/39313)) ([736e064](https://github.com/angular/angular/commit/736e064))
* **router:** Adjust type of parameter in navigateByUrl and createUrlTree to be more accurate ([#38227](https://github.com/angular/angular/issues/38227)) ([e4f4d18](https://github.com/angular/angular/commit/e4f4d18)), closes [#18798](https://github.com/angular/angular/issues/18798)




<a name="10.2.3"></a>
## 10.2.3 (2020-11-09)


### Bug Fixes

* **compiler:** ensure that i18n message-parts have the correct source-span ([#39589](https://github.com/angular/angular/issues/39589)) ([e67a331](https://github.com/angular/angular/commit/e67a331))
* **compiler:** skipping leading whitespace should not break placeholder source-spans ([#39589](https://github.com/angular/angular/issues/39589)) ([2b684b7](https://github.com/angular/angular/commit/2b684b7)), closes [#39195](https://github.com/angular/angular/issues/39195)
* **compiler-cli:** avoid duplicate diagnostics about unknown pipes ([#39517](https://github.com/angular/angular/issues/39517)) ([861e4fa](https://github.com/angular/angular/commit/861e4fa))
* **compiler-cli:** do not drop non-Angular decorators when downleveling ([#39577](https://github.com/angular/angular/issues/39577)) ([1c6cf8a](https://github.com/angular/angular/commit/1c6cf8a)), closes [#39574](https://github.com/angular/angular/issues/39574)



<a name="10.2.2"></a>
## 10.2.2 (2020-11-04)


### Bug Fixes

* **compiler-cli:** report missing pipes when \`fullTemplateTypeCheck\` is disabled ([#39320](https://github.com/angular/angular/issues/39320)) ([71d0063](https://github.com/angular/angular/commit/71d0063)), closes [#38195](https://github.com/angular/angular/issues/38195)
* **core:** markDirty() should only mark flags when really scheduling tick. ([#39316](https://github.com/angular/angular/issues/39316)) ([8c82106](https://github.com/angular/angular/commit/8c82106)), closes [#39296](https://github.com/angular/angular/issues/39296)
* **router:** Ensure all outlets are used when commands have a prefix ([#39456](https://github.com/angular/angular/issues/39456)) ([85d5242](https://github.com/angular/angular/commit/85d5242))

### Performance Improvements

* **core:** do not recurse into modules that have already been registered ([#39514](https://github.com/angular/angular/issues/39514)) ([812355c](https://github.com/angular/angular/commit/812355c)), closes [#39487](https://github.com/angular/angular/issues/39487)



<a name="10.2.1"></a>
## 10.2.1 (2020-10-28)


### Bug Fixes

* **bazel:** only providing stamping information if the --stamp flag is used ([#39392](https://github.com/angular/angular/issues/39392)) ([ed88407](https://github.com/angular/angular/commit/ed88407))
* **core:** do not error when \`ngDevMode\` is undeclared ([#39415](https://github.com/angular/angular/issues/39415)) ([fcebc83](https://github.com/angular/angular/commit/fcebc83))
* **localize:** render placeholder types in extracted XLIFF files ([#39459](https://github.com/angular/angular/issues/39459)) ([ea1baf9](https://github.com/angular/angular/commit/ea1baf9)), closes [#38791](https://github.com/angular/angular/issues/38791)
* **localize:** serialize all the message locations to XLIFF ([#39411](https://github.com/angular/angular/issues/39411)) ([db51de8](https://github.com/angular/angular/commit/db51de8)), closes [#39330](https://github.com/angular/angular/issues/39330)
* **ngcc:** capture UMD/CommonJS inner class implementation node correctly ([#39346](https://github.com/angular/angular/issues/39346)) ([bdaa714](https://github.com/angular/angular/commit/bdaa714))



<a name="10.2.0"></a>
# 10.2.0 (2020-10-21)


### Bug Fixes

* **core:** guard reading of global \`ngDevMode\` for undefined. ([#36055](https://github.com/angular/angular/issues/36055)) ([02405f1](https://github.com/angular/angular/commit/02405f1))
* **platform-server:** Resolve absolute URL from baseUrl ([#39334](https://github.com/angular/angular/issues/39334)) ([71fb99f](https://github.com/angular/angular/commit/71fb99f))


### BREAKING CHANGES

* **platform-server:** If you use \`useAbsoluteUrl\` to setup \`platform-server\`, you now need to
also specify \`baseUrl\`.
We are intentionally making this a breaking change in a minor release,
because if \`useAbsoluteUrl\` is set to \`true\` then the behavior of the
application could be unpredictable, resulting in issues that are hard to
discover but could be affecting production environments.



<a name="10.1.6"></a>
## 10.1.6 (2020-10-14)


### Bug Fixes

* **compiler:** incorrectly encapsulating [@import](https://github.com/import) containing colons and semicolons ([#38716](https://github.com/angular/angular/issues/38716)) ([52a0c6b](https://github.com/angular/angular/commit/52a0c6b)), closes [#38587](https://github.com/angular/angular/issues/38587)
* **compiler-cli:** support namespaced query types in directives ([#38959](https://github.com/angular/angular/issues/38959)) ([#39272](https://github.com/angular/angular/issues/39272)) ([f752ab9](https://github.com/angular/angular/commit/f752ab9))
* **elements:** detect matchesSelector prototype without IIFE ([#37799](https://github.com/angular/angular/issues/37799)) ([952fd86](https://github.com/angular/angular/commit/952fd86)), closes [#24551](https://github.com/angular/angular/issues/24551)
* **ngcc:** ensure that "inline exports" can be interpreted correctly ([#39272](https://github.com/angular/angular/issues/39272)) ([e08d021](https://github.com/angular/angular/commit/e08d021))
* **ngcc:** handle aliases in UMD export declarations ([#38959](https://github.com/angular/angular/issues/38959)) ([#39272](https://github.com/angular/angular/issues/39272)) ([9963c5d](https://github.com/angular/angular/commit/9963c5d)), closes [#38947](https://github.com/angular/angular/issues/38947)
* **ngcc:** map \`exports\` to the current module in UMD files ([#38959](https://github.com/angular/angular/issues/38959)) ([#39272](https://github.com/angular/angular/issues/39272)) ([13c4a7b](https://github.com/angular/angular/commit/13c4a7b))
* **ngcc:** support inline export declarations in UMD files ([#38959](https://github.com/angular/angular/issues/38959)) ([#39272](https://github.com/angular/angular/issues/39272)) ([9c875b3](https://github.com/angular/angular/commit/9c875b3)), closes [#38947](https://github.com/angular/angular/issues/38947)
  `

  constructor() { }

  ngOnInit(): void {
  }

}
