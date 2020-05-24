import 'isomorphic-fetch'

import Modal from '../components/Modal'
import Clip from '../components/Clip'

const Podcast = ({ clip }) => (
	<div>
		<Modal>
			<Clip clip={clip} />
		</Modal>
	</div>
)

Podcast.getInitialProps = async ({ query }) => {
  const idPodcast = query.id
  const reqClip = await fetch(
		`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`
	)
  const clip = (await reqClip.json()).body.audio_clip
  return { clip }
}

export default Podcast