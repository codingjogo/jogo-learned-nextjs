"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<main className="flex h-full flex-col items-center justify-center">
			<h2 className="text-center">Something went wrong!</h2>
			<button
				className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
				onClick={
					// Attempt to recover by trying to re-render the invoices route
					() => reset()
				}
			>
				Try again
			</button>
			<button
				className="mt-4 rounded-md bg-blue-300 px-4 py-2 text-sm text-blue-900 font-semibold transition-colors hover:bg-blue-200"
				onClick={
					// Attempt to recover by trying to re-render the invoices route
					() => router.push("/dashboard")
				}
			>
				Go back to Dashboard
			</button>
		</main>
	);
}
