import Error from './_error'

import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'
import Modal from '../components/Modal'
import Clip from '../components/Clip'
import { useState } from 'react'

const Channel = ({ channel, audio_clips, series, statusCode }) => {
	
	const [openPodcast, setOpenPodcast] = useState(null)
	
	const handleOpenPodcast = (event, podcast) => {
		event.preventDefault()
		setOpenPodcast(podcast)
	}

	const handleCloseModal = event => {
		event.preventDefault()
		setOpenPodcast(null)
	}

	if (statusCode !== 200) {
		return <Error statusCode={statusCode} />
	}

	return (
		<Layout title={channel.title}>
			<div className="channel">
				<h1>{channel.title}</h1>

				{openPodcast && (
					<Modal onClose={handleCloseModal}>
						<Clip clip={openPodcast} />
					</Modal>
				)}

				<h2>Series</h2>
				<ChannelGrid channels={series} />

				<h2>Últimos Podcasts</h2>
				<PodcastList
					audio_clips={audio_clips}
					onClickPodcast={handleOpenPodcast}
				/>
			</div>

			<style jsx>{`
				h1 {
					padding-left: 0.5em;
				}

				h2 {
					padding: 5px;
					font-size: 0.9em;
					font-weight: 600;
					margin: 0;
					text-align: center;
				}
			`}</style>
		</Layout>
	)
}

Channel.getInitialProps = async ({ query, res}) => {
	try {
		const idChannel = query.id
		const [reqChannel, reqSeries, reqAudios] = await Promise.all([
			fetch(`https://api.audioboom.com/channels/${idChannel}`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
		])

		if (reqChannel.status >= 400) {
			res.statusCode = reqChannel.status
			return {
				channels: [],
				audio_clips: [],
				series: [],
				statusCode: reqChannel.status,
			}
		}
		
		const [dataChannel, dataSeries, dataAudios] = await Promise.all([
			reqChannel.json(),
			reqSeries.json(),
			reqAudios.json()
		])
	
		let channel = dataChannel.body.channel
		let series = dataSeries.body.channels
		let audio_clips = dataAudios.body.audio_clips
	
		return { channel, audio_clips, series, statusCode: 200 }

	} catch (err) {
		res.statusCode = 503
		return { channels: [], audio_clips: [], series: [], statusCode: 503 }
	}
}

export default Channel