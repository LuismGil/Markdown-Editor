import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
// import App from './App';
import marked from 'marked';

const placeholder = `# This is my Markdown Editor
## You can write in markdown here

An HTML container is \`<div><div>\`

If your want you can see if click [here](https://codepen.io/luismgil/full/poNzVZN).

\`\`\`
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
    };
\`\`\`

- List Test 1
- List Test 2
- List Test 3

~~~
This is a block code
  Only for test
~~~

![nice Cat](https://i.imgur.com/45vZ9A3.jpg)

**A nice cat image :D**

> 'Work gives you meaning and purpose and life is empty without it.'

– Stephen Hawking`;

marked.setOptions({
  breaks: true,
  gfm: true,
});

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text);

    return (
      <div>
        <h1 className="text-center m-4">Markdown Editor</h1>
        <hr />
        <div className="container">
          <Editor text={text} onChange={this.handleChange} />
          <div>
            <h4 className="text-center"> Preview </h4>
            <div
              className="container__preview form-control m-2"
              id="preview"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
          </div>
        </div>
        <footer className="text-center m-4">by Luis M Gil</footer>
      </div>
    );
  }
}

const Editor = props => {
  return (
    <div className="text-center">
      <h4>Editor</h4>
      <textarea
        className="container__editor form-control m-2"
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.text}
      />
    </div>
  );
};

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
