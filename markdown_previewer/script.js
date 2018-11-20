const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a","<a target='_blank' ");
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true
});


class App extends React.Component {
  constructor(props) {
    const defaultMarkdown =
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
    super(props);

    this.state = {
      input : defaultMarkdown
    }
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }


  convetToMarkdown() {
    let md = marked(this.state.input);
    return {__html : md};
  }

  renderMarkdown(e) {
   this.setState({input : e.target.value})
  }

  render() {
    return (
      <div className='container'>
        <div className='screen'>
        <h4>Editor</h4>
          <textarea id='editor'
                    value={this.state.input}
                    onChange={ e => this.renderMarkdown(e)}/>
        </div>

        <div className='screen'>
          <h4>Preview</h4>
          <div id='preview' dangerouslySetInnerHTML={this.convetToMarkdown()}></div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('root'));

