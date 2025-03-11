'use client'

import OurUploadDropzone from '@/components/layout/admin/OurUploadDropzone'
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
import { createProduct } from '@/lib/actions'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { ProductSchema } from '@/prisma/zod'
import { useActionState } from 'react'

export default function CreatePage() {

	const [lastResult, action] = useActionState(createProduct, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},

		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

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
						{/* Images */}
						<div className='flex flex-col gap-3'>
							<Label>Images</Label>
							<OurUploadDropzone />
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
