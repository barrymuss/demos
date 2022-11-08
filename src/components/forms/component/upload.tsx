import { useState, useRef, FC } from 'react';
import { Empty, Button } from 'components';
import styles from 'style/elements/uploadfile.module.scss';

export type UploadProps = {
	id?: any;
	center?: any;
	height?: any;
	width?: any;
	value?: any;
	onCancel?: any;
	onChange?: any;
	empty?: any;
	multiple?: any;
	disabled?: true | false;
};

export const UploadFile: FC<UploadProps> = ({
	id,
	center,
	height,
	width,
	value,
	onCancel,
	onChange,
	empty,
	disabled = false,
}) => {
	const fileInput = useRef<any>(null);

	const handleUpload = () => {
		fileInput.current.click();
	};

	return (
		<div style={{ height: height, width: width, margin: center ? 'auto' : '' }} className={styles['upload-wrapper']}>
			<input
				ref={fileInput}
				id={id}
				style={{ display: 'none' }}
				type='file'
				accept='.png, .jpg, .jpeg, .mp4, .svg, .jpeg'
				onChange={onChange}
			/>

			{(value && (
				<>
					{/* <img src={baseImage.base64} height='200px' /> */}
					<img src={value} height='200px' />
					<Button
						size='small'
						shape='circle'
						className={styles['button-cancel']}
						type='primary'
						danger
						icons='close'
						onClick={onCancel}
					/>
				</>
			)) || (
				<Empty description='Upload File' style={{ position: 'relative' }} {...empty}>
					<Button type='primary' disabled={disabled} icons='upload' onClick={handleUpload}>
						Upload
					</Button>
				</Empty>
			)}
		</div>
	);
};

export const UploadDocument: FC<UploadProps> = ({
	id,
	center,
	height,
	width,
	value,
	onCancel,
	onChange,
	multiple,
	disabled = false,
}) => {
	const fileInput = useRef<any>(null);

	const handleUpload = () => {
		fileInput.current.click();
	};

	return (
		<div style={{ height: height, width: width, margin: center ? 'auto' : '' }}>
			<input ref={fileInput} multiple={multiple} id={id} style={{ display: 'none' }} type='file' onChange={onChange} />
			{(value && (
				<span>
					{value}
					<Button
						style={{ marginLeft: 8 }}
						size='small'
						className={styles['button-cancel']}
						type='text'
						danger
						icons='close'
						onClick={onCancel}
					/>
				</span>
			)) || (
				<Button type='primary' icons='upload' disabled={disabled} onClick={handleUpload}>
					Upload
				</Button>
			)}
		</div>
	);
};

// export default UploadDocument;
