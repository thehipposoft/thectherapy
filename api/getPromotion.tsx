export interface Promotion {
      valid_from: string;
      valid_till: string;
      background_image: number | string;
      text_color: string,
      main_title: string;
      secondary_title?: string;
      description: string;
      moving_text?: string;
      first_button_text: string;
      first_button_redirect: string;
      second_button_text?: string;
      second_button_redirect?: string;
      third_button_text?: string;
      third_button_redirect?: string;
}

export interface Promotion {
  acf: Promotion;
}

export default async function getPromotion(): Promise<Promotion | null> {
  const res = await fetch("https://store.thectherapy.com.au/wp-json/wp/v2/promotion",
    {
      next: { revalidate: 180 }, // 3 minutos
    }
  );

  if (!res.ok) throw new Error('Failed to fetch project');

  const promotions: Promotion[] = await res.json();

  // Asumimos que queremos el primer elemento si es un array
  const result = promotions.length > 0 ? promotions[0] : null;

  return result;
}
