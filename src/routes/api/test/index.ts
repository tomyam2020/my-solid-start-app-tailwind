import type { APIHandler } from "@solidjs/start/server";

export const GET = () => {
	return new Response(JSON.stringify({ user: "aaa" }));
};
