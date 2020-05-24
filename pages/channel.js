import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'

const Channel = ({ channel, audio_clips, series }) => (
	<Layout title={channel.title}>
		<div className="channel">
			<h1>{channel.title}</h1>

			<h2>Series</h2>
			<ChannelGrid channels={series} />

			<h2>Últimos Podcasts</h2>
			<PodcastList audio_clips={audio_clips} />
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

Channel.getInitialProps = async ({ query }) => {
  const idChannel = query.id
  const [reqChannel, reqSeries, reqAudios] = await Promise.all([
		fetch(`https://api.audioboom.com/channels/${idChannel}`),
		fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
		fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
  ])
  
  const [dataChannel, dataSeries, dataAudios] = await Promise.all([
    reqChannel.json(),
    reqSeries.json(),
    reqAudios.json()
  ])

  let channel = dataChannel.body.channel
  let series = dataSeries.body.channels
  let audio_clips = dataAudios.body.audio_clips

	return { channel, audio_clips, series }
}

export default Channel