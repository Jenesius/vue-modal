import {ModalOptions} from "./Modal";
import {configuration} from "./config";

export default function DtoModalOptions(options: ModalOptions): {
	backgroundClose: boolean
} {
	const output = {
		backgroundClose: configuration.backgroundClose
	};
	
	if (options.backgroundClose !== undefined)
		output.backgroundClose = options.backgroundClose;

	return output;
}
