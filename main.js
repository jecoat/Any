import { app, BrowserWindow }  from 'electron/main'

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1166,
		height: 1000
	})

	win.loadFile('index.html')
}

app.whenReady().then( () => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0){
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

