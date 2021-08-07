export const codeBeforeModalClose =
`
const Foo = {
	template: "...",
	beforeModalClose(next) {
		// вызывается перед закрытием модального окна
		// имеет доступ к контексту экземпляра компонента this.
	}
}
`;