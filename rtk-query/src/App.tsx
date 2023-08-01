import { api } from "./app/api";

const Count = ({ name }: { name: string }) => {
  const { data, isFetching } = api.useGetCountQuery({ name });
  const mutation = api.useSetCountMutation();
  const [setCount, { isLoading }] = mutation;

  if (isFetching) {
    return <>Loading</>;
  }

  return (
    <div>
      <button
        onClick={async () => {
          await setCount({ name, value: data + 1 });
        }}
      >
        {name} {data}
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <Count name="egoing" />
      <Count name="jane" />
      <Count name="steve" />
    </>
  );
}

export default App;
