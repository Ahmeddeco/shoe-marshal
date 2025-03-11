'use client'

import { links } from '@/constants/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashboardNavigation = () => {
	const pathName = usePathname()

	return (
		<>
			{links.map(({ href, name }, i) => (
				<Link
					href={href}
					key={i}
					className={`${
						pathName === href
							? 'text-foreground'
							: 'text-muted-foreground hover:text-foreground transition-all'
					} capitalize`}
				>
					{name}
				</Link>
			))}
		</>
	)
}

export default DashboardNavigation
