export function jsxElementToString(jsx: React.JSX.Element): string {
	const object: string | React.JSX.Element = jsx.props.children
	let result = ''
	if (typeof object === 'string') {
		result += object
	} else {
		if (Array.isArray(object)) {
			result += object
				.map((item: string | React.JSX.Element) => {
					if (typeof item === 'string') {
						return item
					} else {
						return jsxElementToString(item)
					}
				})
				.join('')
		} else {
			return jsxElementToString(object)
		}
	}
	return result
}

export function calculateAge(birthyear: number): string {
	const currentDate: Date = new Date()
	const currentYear: number = currentDate.getFullYear()
	const age: number = currentYear - birthyear
	return age.toString()
}

export const scrollOnClick = (e: React.MouseEvent): void => {
	e.preventDefault()
	const target = document.querySelector((e.currentTarget as HTMLAnchorElement).hash)
	target!.scrollIntoView({
		behavior: 'smooth', block: 'start'
	})
}

export const rangeToPercentage = (value: number, minRange: number, maxRange: number): number => {
  const porcentaje = (value - minRange) / (maxRange - minRange)
  return 0 + porcentaje * (1 - 0)
}