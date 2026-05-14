import { NextResponse } from "next/server";

import { defaultLocale } from "@/types/locale";

export function GET(request: Request) {
	return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
}
