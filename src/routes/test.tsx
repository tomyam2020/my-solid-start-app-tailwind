import { A } from "@solidjs/router";
import { createResource, Show } from "solid-js";
import Counter from "~/components/Counter";

export default function Test() {
  const [user] = createResource(async () => {
    const response = await fetch("http://localhost:3000/api/test");
    return await response.json();
  });
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-6xl text-sky-700 font-thin uppercase my-16">
        <div class="flex justify-center items-center">
          <span class="mr-5">Hello</span> !
        </div>
      </h1>
      <Counter />
      <Show when={user()}>
        <div>{JSON.stringify(user())}</div>
      </Show>
      {/* <Show when={user.loading}>
        <p>Loading...</p>
      </Show>
      <Switch>
        <Match when={user.error}>
          <span>Error: {user.error()}</span>
        </Match>
        <Match when={user()}>
          <div>{JSON.stringify(user())}</div>
        </Match>
      </Switch> */}
      {/* <p class="text-xl text-red-600">{user.loading}</p>
      <p class="text-xl text-red-600">{user()}</p> */}
    </main>
  );
}
