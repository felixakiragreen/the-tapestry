import { TheTapestry } from '../typechain'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

export async function weaveTestLines(
	tapestry: TheTapestry,
	accounts: SignerWithAddress[],
	numberOfChapters: number = 4,
	numberOfLines: number = 16,
) {
	// c is chapter index
	for (let c = 1; c <= numberOfChapters; c++) {
		// l is line index within chapter
		for (let l = 0; l < numberOfLines; l++) {
			// k is overall line index
			const k = (c - 1) * 16 + l
			const tapestryConnectedToOtherAccount = tapestry.connect(accounts[l])
			await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[k])
		}
	}
}

export async function weaveTestLines2({
	tapestry,
	accounts,
	numberOfChapters = 4,
	numberOfLines = 16,
}: {
	tapestry: TheTapestry
	accounts: SignerWithAddress[]
	numberOfChapters?: number
	numberOfLines?: number
}) {
	// c is chapter index
	for (let c = 1; c <= numberOfChapters; c++) {
		// l is line index within chapter
		for (let l = 0; l < numberOfLines; l++) {
			// k is overall line index
			const k = (c - 1) * 16 + l
			const tapestryConnectedToOtherAccount = tapestry.connect(accounts[l])
			await tapestryConnectedToOtherAccount.weave(TOLKIEN.split('\n')[k])
		}
	}
}

export const TOLKIEN = `1 There is an inn, a merry old inn, beneath an old grey hill.
2 And there they brew a beer so brown.
3 that the Man in the Moon himself came down.
4 One night to drink his fill.
5 The ostler has a tipsy cat that plays a five-stringed fiddle.
6 And up and down he runs his bow.
7 Now squeaking high, now purring low.
8 Now sawing in the middle.
9 The landlord keeps a little dog.
10 that is mighty fond of jokes.
11 When there's good cheer among the guests.
12 He cocks an ear at all the jests and laughs until he chokes.
13 They also keep a hornéd cow as proud as any queen.
14 But music turns her head like ale.
15 And makes her wave her tufted tail.
16 and dance upon the green.
17 And O! the rows of silver dishes.
18 The store of silver spoons.
19 For Sunday there's a special pair.
20 And these they polish up with care on Saturday afternoons.
21 The Man in the Moon was drinking deep, and the cat began to wail.
22 A dish and a spoon on the table danced.
23 The cow in the garden madly pranced.
24 The little dog chased his tail.
25 The Man in the Moon took another mug.
26 Then rolled beneath his chair.
27 And there he dozed and dreamed of ale.
28 Till in the sky the stars were pale, and dawn was in the air.
29 Then the ostler said to his tipsy cat.
30 The white horses of the Moon neigh and champ their silver bits.
31 But their master's been and drowned his wits.
32 The Sun'll be rising soon! So the cat on his fiddle played a jig that would wake the dead.
33 He squeaked and sawed and quickened the tune.
34 While the landlord shook the Man in the Moon.
35 It's after three! he said.
36 They rolled the Man slowly up the hill and bundled him into the Moon.
37 While the horses galloped up in rear.
38 And the cow came capering like a deer.
39 and a dish ran up with a spoon.
40 Now quicker the fiddle went deedle-dum-diddle, the dog began to roar.
41 The cow and the horses stood on their heads.
42 The guests all bounded from their beds.
43 And danced upon the floor.
44 With a ping and a long the fiddle-strings broke! the cow jumped over the Moon.
45 And the little dog laughed to see such fun.
46 And the Saturday dish went off at a run with the silver Sunday spoon.
47 The round Moon rolled behind the hill, as the Sun raised up her head.
48 She hardly believed her fiery eyes.
49 For though it was day, to her surprise.
50 Then they all went back to bed.
51 There is an inn, a merry old inn, beneath an old grey hill.
52 And there they brew a beer so brown.
53 that the Man in the Moon himself came down.
54 One night to drink his fill.
55 The ostler has a tipsy cat that plays a five-stringed fiddle.
56 And up and down he runs his bow.
57 Now squeaking high, now purring low.
58 Now sawing in the middle.
59 The landlord keeps a little dog.
60 that is mighty fond of jokes.
61 When there's good cheer among the guests.
62 He cocks an ear at all the jests and laughs until he chokes.
63 They also keep a hornéd cow as proud as any queen.
64 But music turns her head like ale.
65 And makes her wave her tufted tail.
`
