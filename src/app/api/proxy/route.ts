// app/api/proxy/route.ts

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
      return new Response("Missing URL", { status: 400 });
    }

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        "Erreur lors du téléchargement :",
        response.status,
        response.statusText
      );
      return new Response("Impossible de récupérer le PDF", { status: 502 });
    }

    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("application/pdf")) {
      console.error("Contenu non PDF reçu :", contentType);
      return new Response("Ce n'est pas un fichier PDF", { status: 415 });
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=proxy.pdf",
      },
    });
  } catch (e) {
    console.error("Erreur serveur proxy:", e);
    return new Response("Erreur serveur", { status: 500 });
  }
}
