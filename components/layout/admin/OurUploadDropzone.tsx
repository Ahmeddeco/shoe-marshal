'use client'

import { UploadDropzone } from '@/utils/uploadthing'

export default function Home() {
	return (
		<UploadDropzone
			endpoint='imageUploader'
			onClientUploadComplete={(res) => {
				// Do something with the response
				alert('Upload Completed')
				console.log('Files: ', res)
			}}
			onUploadError={(error: Error) => {
				// Do something with the error.
				alert(`ERROR! ${error.message}`)
			}}
		/>
	)
}
