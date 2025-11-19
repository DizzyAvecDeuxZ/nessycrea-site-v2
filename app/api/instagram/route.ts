import { NextResponse } from 'next/server'

type InstaItem = {
  id: string
  caption?: string
  permalink: string
  media_url: string
  media_type: string
  thumbnail_url?: string
}

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!userId || !token) {
    return NextResponse.json({ items: [] }, { status: 200 })
  }

  try {
    const fields = 'id,caption,permalink,media_url,thumbnail_url,media_type'
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}`
    const res = await fetch(url, { next: { revalidate: 60 * 10 } })
    if (!res.ok) throw new Error(`Instagram API: ${res.status}`)
    const data = await res.json()
    const items: InstaItem[] = Array.isArray(data?.data) ? data.data : []
    return NextResponse.json({ items }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ items: [] }, { status: 200 })
  }
}

