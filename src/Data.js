export const Data = [
    {
        Heading: "getInitialState",
        Detail: "Invoked once before the component is mounted. The return value will be used as the initial value of <code>this.state</code>"
        , id: 1
    },
    {
        Heading: "componentWillMount",
        Detail: "Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call <code>setState</code> within this method, <code>render()</code> will see the updated state and will be executed only once despite the state change."
        , id: 2
    },
    {
        Heading: "render",
        Detail: "The render() method is required.When called, it should examine this.props and this.state and return a single child element.This child element can be either a virtual representation of a native DOM component(such as  div or React.DOM.div()) or another composite component that you've defined yourself You can also return null or false to indicate that you don't want anything rendered. Behind the scenes, React renders a noscript tag to work with our current diffing algorithm. When returning null or false, ReactDOM.findDOMNode(this) will return null The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using <code>setTimeout</code>). If you need to interact with the browser, perform your work in <code>componentDidMount()</code> or the other lifecycle methods instead. Keeping <code>render()</code> pure makes server rendering more practical and makes components easier to think about"
        , id: 3
    },
    {
        Heading: "componentDidMount",
        Detail: "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The <code>componentDidMount()</code> method of child components is invoked before that of parent components.If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method"
        , id: 4
    }
]

export const Data2 = [
    {
        Heading: "componentWillReceiveProps",
        Detail: "Invoked when a component is receiving new props. This method is not called for the initial render.Use this as an opportunity to react to a prop transition before <code>render()</code> is called by updating the state using <code>this.setState()</code>. The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render."
        , id: 5
    },
    {
        Heading: "shouldComponentUpdate",
        Detail: "Invoked b efore rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.Use this as an opportunity to return <code>false</code> when you're certain that the transition to the new props and state will not require a component update."
        , id: 6
    },
    {
        Heading: "componentWillUpdate",
        Detail: "Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.Use this as an opportunity to operate on the DOM when the component has been updated."
        , id: 7
    },
    ,
    {
        Heading: "render",
        Detail: "The render() method is required.When called, it should examine this.props and this.state and return a single child element.This child element can be either a virtual representation of a native DOM component(such as  div or React.DOM.div()) or another composite component that you've defined yourself You can also return null or false to indicate that you don't want anything rendered. Behind the scenes, React renders a noscript tag to work with our current diffing algorithm. When returning null or false, ReactDOM.findDOMNode(this) will return null The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using <code>setTimeout</code>). If you need to interact with the browser, perform your work in <code>componentDidMount()</code> or the other lifecycle methods instead. Keeping <code>render()</code> pure makes server rendering more practical and makes components easier to think about"
        , id: 8
    },
    {
        Heading: "componentDidUpdate",
        Detail: "Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.Use this as an opportunity to operate on the DOM when the component has been updated."
        , id: 9
    }
]

export const Data3 = [
    {
        Heading: "componentWillUnmount",
        Detail: "Invoked immediately before a component is unmounted from the DOM.Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount."
        , id: 10
    }

]