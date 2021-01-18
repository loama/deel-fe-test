#### What is the difference between Component and PureComponent? give an example where it might break my app.

They are the same, but PureComponent handles the re-rendering of the component automatically, based on the props and the state.

It could break your app if you are updating objects instead of passing new ones, as it does not do a deep comparison.


#### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Not sure, would need to spend some time in google.

#### Describe 3 ways to pass information from a component to its PARENT.
- Emitting a prop event from the child. The cleaner option.
- Using a central store. That way it would be available to every other component, not just the parent.
- Using the route query and looking at it from the parent

#### Give 2 ways to prevent components from re-rendering.
- Using the `ShouldComponentUpdate`
- Not updating or triggering anything. (if you do nothing, nothing should happen :stuck_out_tongue:)

- Bonus one: using a `PureComponent`, in the background it is the same as the first option, but with less work (also more obscure).

#### What is a fragment and why do we need it? Give an example where it might break my app.
It is a functionality of react that allows you to return components without creating a parent you don't need to use. Like a `<div>` containing them.
It could break your styles, if, for example, you where wrapping everything in a `<div>` when you wrote your styles and then you start using a `<React.Fragment>` your DOM will change.

#### Give 3 examples of the HOC pattern.
It is a function to create components dynamically.
It can be used when you have multiple components behaving similarly but with key differences.

It could be used for:
- Charts
- Components which interact with the same complex API.
- And I can't thing of another example right now.


#### what's the difference in handling exceptions in promises, callbacks and async...await.

In promises you have the `catch` keyword to do this.
In async calls, the easiest thing to do is wrapping it in a `try catch`.

#### How many arguments does setState take and why is it async.
It takes one argument, the new state.
And it is `most of the time` async to allow us to call it multiple times in a single scope without triggering re-renders not needed.

#### List the steps needed to migrate a Class to Function Component.
- Remove the import of component.
- Change the top line from `class <Component> extends ...` to `function <Component>`
- If you use state in your component, you need to rewrite it to use `useState hook`.

#### List a few ways styles can be used with components.
- You can import a CSS file at the top of the component.
- You can write inline styles.
- You can write styled components.

BEST
- You can use a CSS library in your whole project and just add the class names to your elements.


#### How to render an HTML string coming from the server.
Using the `DangerouslySetInnerHTML`
