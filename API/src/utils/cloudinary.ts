import * as cloudinary from 'cloudinary'
import { settings } from '@config/settings'
import { Readable } from 'stream'
import AppError from './appError'

class CloudinaryService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: settings.CLOUDINARY.CLOUD_NAME,
      api_key: settings.CLOUDINARY.API_KEY,
      api_secret: settings.CLOUDINARY.API_SECRET,
    })
  }

  // Convert buffer to readable stream
  bufferToStream(buffer: Buffer): Readable {
    const readable = new Readable()
    readable.push(buffer)
    readable.push(null) // End the stream
    return readable
  }

  async uploadPhoto(buffer: Buffer): Promise<cloudinary.UploadApiResponse> {
    try {
      const result = await new Promise<cloudinary.UploadApiResponse>(
        (resolve, reject) => {
          const uploadStream = cloudinary.v2.uploader.upload_stream(
            { folder: 'Ubay' },
            (error, result) => {
              if (error) {
                reject(new AppError(400, [], `Upload failed: ${error.message}`))
              } else {
                resolve(result)
              }
            }
          )
          const stream = this.bufferToStream(buffer)
          stream.pipe(uploadStream)
        }
      )
      return result
    } catch (err: any) {
      throw new Error(`Upload failed: ${err.message}`)
    }
  }

  async uploadSinglePhoto(buffer: Buffer) {
    const result = await this.uploadPhoto(buffer)
    return result.url
  }

  async uploadMultiplePhotos(buffers: Buffer[]) {
    const results = await Promise.all(buffers.map((e) => this.uploadPhoto(e)))
    return results.map((res) => res.url)
  }

  async removePhoto(publicId: string) {
    return await cloudinary.v2.uploader.destroy(publicId, {
      resource_type: 'image',
    })
  }

  async removeMultiplePhotos(publicIds: string[]) {
    return await Promise.all(
      publicIds.map(async (p) => await this.removePhoto(p))
    )
  }
}

export const cloudinaryService = new CloudinaryService()
