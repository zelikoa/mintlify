// gptForm.js

const GPTForm = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(`You entered: **${prompt}**`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your prompt here:</label>
        <input
          type="text"
          id="prompt"
          name="prompt"
          placeholder="Enter your prompt here"
          className="dark"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="dark"
        />
      </form>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
};

export default GPTForm;
