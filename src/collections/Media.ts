import type { CollectionConfig } from 'payload'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with service role key (server-side only)
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url', // Store the public URL of the uploaded file
      type: 'text',
      admin: {
        hidden: true, // Hide in admin UI since it's auto-populated
      },
    },
  ],
  upload: {
    // Minimal config since we're overriding the upload logic
    mimeTypes: ['image/*'], // Restrict to images (adjust as needed)
  },
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        if (req.file) {
          const file = req.file
          // Generate a unique filename
          const fileName = `${Date.now()}-${file.name}`
          // Upload to Supabase Storage
          const { data: uploadData, error } = await supabase.storage
            .from('neo-cms') // Your bucket name
            .upload(fileName, file.data, {
              contentType: file.mimetype,
            })

          if (error) {
            throw new Error(`Upload failed: ${error.message}`)
          }

          // Get the public URL
          const { data: urlData } = supabase.storage.from('neo-cms').getPublicUrl(fileName)

          // Return the updated data with the URL
          return {
            ...data,
            url: urlData.publicUrl,
          }
        }
        return data // No file, return unchanged
      },
    ],
  },
}
