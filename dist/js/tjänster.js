let toastId = 'toast';

async function triggerToast() {
	console.log("triggred");
	let toast = $('#toast');

	if (toast != null)
	{
		
		console.log("toast exists");
		await toast.toast('show');
		console.log("test 1");
	}
}
