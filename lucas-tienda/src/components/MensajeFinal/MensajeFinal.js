import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MensajeFinal = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {purchaseID}
			</Alert>
		</Stack>
	);
};

export default MensajeFinal;