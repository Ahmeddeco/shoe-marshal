'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { createProduct } from '@/functions/actions'
import { ChevronLeft, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { ProductSchema } from '@/prisma/zod'
import { useActionState, useState } from 'react'
import { UploadDropzone } from '@/utils/uploadthing'
import Image from 'next/image'

export default function CreatePage() {
	const [images, setImages] = useState<string[]>([])
	console.log(images)

	const [lastResult, action] = useActionState(createProduct, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},

		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	const handleDelete = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
		console.log(`We delete image number ${index}`)
	}

	return (
		<form id={form.id} onSubmit={form.onSubmit} action={action}>
			<div className='flex items-center gap-4'>
				<Button variant={'outline'} asChild>
					<Link href={'/dashboard/products'}>
						<ChevronLeft className='size-4' />
					</Link>
				</Button>
				<h1 className='capitalize text-xl font-semibold tracking-tight'>
					new product
				</h1>
			</div>
			<Card className='mt-5'>
				<CardHeader>
					<CardTitle>Product Details</CardTitle>
					<CardDescription>
						In this form you can create your product
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col gap-6'>
						{/* Name */}
						<div className='flex flex-col gap-3'>
							<Label>Name</Label>
							<Input
								type='text'
								key={fields.name.key}
								name={fields.name.name}
								defaultValue={fields.name.initialValue}
								placeholder='Product Name'
								className='w-full'
							/>
							<p className='text-destructive'>{fields.name.errors}</p>
						</div>

						{/* Description */}
						<div className='flex flex-col gap-3'>
							<Label>Description</Label>
							<Textarea
								key={fields.description.key}
								name={fields.description.name}
								defaultValue={fields.description.initialValue}
								placeholder='Write your description here ...'
								className='w-full'
							/>
							<p className='text-destructive'>{fields.description.errors}</p>
						</div>

						{/* Price */}
						<div className='flex flex-col gap-3'>
							<Label>Price</Label>
							<Input
								type='number'
								key={fields.price.key}
								name={fields.price.name}
								defaultValue={fields.price.initialValue}
								placeholder='$55'
								className='w-full'
							/>
							<p className='text-destructive'>{fields.price.errors}</p>
						</div>
						<div className='flex flex-col gap-3'>
							<Label>Featured Product</Label>
							<Switch
								key={fields.isFeatured.key}
								name={fields.isFeatured.name}
								defaultValue={fields.isFeatured.initialValue}
							/>
							<p className='text-destructive'>{fields.isFeatured.errors}</p>
						</div>

						{/* Status */}
						<div className='flex flex-col gap-3'>
							<Label>Status</Label>
							<Select
								key={fields.status.key}
								name={fields.status.name}
								defaultValue={fields.status.initialValue}
							>
								<SelectTrigger>
									<SelectValue placeholder='Select Status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='draft' className='capitalize'>
										draft
									</SelectItem>
									<SelectItem value='published' className='capitalize'>
										published
									</SelectItem>
									<SelectItem value='archived' className='capitalize'>
										archived
									</SelectItem>
								</SelectContent>
							</Select>
							<p className='text-destructive'>{fields.status.errors}</p>
						</div>

						{/* UploadDropzone */}
						<div className='flex flex-col gap-3'>
							<Label>Images</Label>
							{images.length > 0 ? (
								<div className='flex gap-5'>
									{images.map((image, index) => (
										<div className='relative size-32' key={index}>
											<Image
												src={image}
												alt={'product image'}
												height={96}
												width={96}
												className='w-full h-full rounded-lg border object-cover'
											/>
											<Button
												type='button'
												size={'icon'}
												className='absolute -top-3 -right-3 size-8'
												variant={'destructive'}
												onClick={() => handleDelete(index)}
											>
												<XIcon />
											</Button>
										</div>
									))}
								</div>
							) : (
								<UploadDropzone
									endpoint='imageUploader'
									onClientUploadComplete={(res) => {
										setImages(res.map((r) => r.ufsUrl))
									}}
									onUploadError={(error: Error) =>
										alert(`ERROR! ${error.message}`)
									}
								/>
							)}
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button>Create Product</Button>
				</CardFooter>
			</Card>
		</form>
	)
}
