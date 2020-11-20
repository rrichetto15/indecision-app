let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && <p>This paragraph holds all the details.</p>}
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'));
}

render();