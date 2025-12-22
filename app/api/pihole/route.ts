import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Load your private keys from .env.local (Server-side only)
  const BIN_ID = process.env.JSONBIN_BIN_ID;
  const MASTER_KEY = process.env.JSONBIN_MASTER_KEY;

/* Debugging for your Ubuntu server terminal 
console.log("--- ENV DEBUG ---");
console.log("Key Length:", MASTER_KEY?.length);
console.log("Raw Key Start:", MASTER_KEY?.substring(0, 5));
console.log("-----------------");
*/


  // 2. Validate environment variables
  if (!BIN_ID || !MASTER_KEY) {
    console.error("❌ ERROR: JSONBIN_BIN_ID or JSONBIN_MASTER_KEY is missing in .env.local");
    return NextResponse.json(
      { error: 'Server configuration missing. Check .env.local at root.' }, 
      { status: 500 }
    );
  }



  try {
    // 3. Fetch the latest record from JSONBin
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      method: 'GET',
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json'
        
      },

      
      // Ensure we always get fresh data, not a cached version
      cache: 'no-store' 
    });

    // 4. Handle HTTP errors from JSONBin (e.g., 401 Unauthorized, 404 Not Found)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("❌ JSONBin API Error:", errorData);
      return NextResponse.json(
        { error: 'Failed to fetch from JSONBin', details: errorData.message || 'Check API Key' }, 
        { status: response.status }
      );
    }

    // 5. Parse and return the record
    const data = await response.json();
    
    // Log for your Ubuntu server terminal debugging
    // console.log("✅ API Success. Data found:", data.record);  // Uncomment for debugging


    return NextResponse.json(data.record);

  } catch (error: any) {
    // 6. Handle unexpected runtime/network errors
    console.error("❌ CRITICAL SERVER ERROR:", error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message }, 
      { status: 500 }
    );
  }
}