import {ModalOptions} from "./Modal";
import {configuration} from "./config";

export default function DtoModalOptions(options: Partial<ModalOptions>): ModalOptions {
	const output: ModalOptions = {
		backgroundClose: configuration.backgroundClose,
		isRoute: false
	};
	
	if (options.backgroundClose !== undefined)
		output.backgroundClose = options.backgroundClose;

	if (options.isRoute) output.isRoute = options.isRoute;

	return output;
}
