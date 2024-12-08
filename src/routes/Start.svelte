<script lang="ts">
	import { Button, Col, Row, Container } from '@sveltestrap/sveltestrap'
	let { title = 'Start' } = $props()
</script>

<section class="layer nwp">
	<Container lg>
		<h1>{title}</h1>
		<Row>
			<Col>
				<Button color="primary" outline>Hello World!</Button>
			</Col>
		</Row>
	</Container>
</section>
