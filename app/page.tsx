const getData = async () => {
  const res = await fetch(`${process.env.FETCH_URL}/api/hello`, {
    cache: "no-store",
  });
  const data: { message: string } = await res.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <h1>RSC</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
