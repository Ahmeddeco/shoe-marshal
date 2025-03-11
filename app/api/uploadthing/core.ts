import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

const f = createUploadthing()


export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 10,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const { getUser } = getKindeServerSession()
      const user = await getUser()

      // If you throw, the user will not be able to upload
      if (!user || user.email !== process.env.ADMIN_EMAIL) throw new UploadThingError("Unauthorized")

      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)

      console.log("file url", file.ufsUrl)

      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
