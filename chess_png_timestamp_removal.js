//Chess PNG Simplifier

var yourPgn = "1.e4 {[%clk 0:10:00]} c5 {[%clk 0:09:58]} 2.c4 {[%clk 0:09:58]} Nc6 {[%clk 0:09:48]} 3.Nf3 {[%clk 0:09:51]} g6 {[%clk 0:09:36]} 4.Nc3 {[%clk 0:09:40]} Bg7 {[%clk 0:09:33]} 5.Nd5 {[%clk 0:09:34]} e6 {[%clk 0:09:04]} 6.Ne3 {[%clk 0:09:23]} Nge7 {[%clk 0:09:02]} 7.h3 {[%clk 0:09:22]} O-O {[%clk 0:08:59]} 8.Be2 {[%clk 0:09:18]} d5 {[%clk 0:08:57]} 9.cxd5 {[%clk 0:09:16]} exd5 {[%clk 0:08:56]} 10.exd5 {[%clk 0:09:15]} Nxd5 {[%clk 0:08:55]} 11.Nxd5 {[%clk 0:09:13]} Qxd5 {[%clk 0:08:53]} 12.O-O {[%clk 0:08:56]} Nd4 {[%clk 0:08:31]} 13.Nxd4 {[%clk 0:08:53]} Bxd4 {[%clk 0:08:29]} 14.Rb1 {[%clk 0:08:47]} Re8 {[%clk 0:08:20]} 15.Bf3 {[%clk 0:08:45]} Qd8 {[%clk 0:07:28]} 16.d3 {[%clk 0:08:43]} Re5 {[%clk 0:07:01]} 17.Qd2 {[%clk 0:08:33]} Qh4 {[%clk 0:06:48]} 18.Qf4 {[%clk 0:08:16]} Bxf2+ {[%clk 0:06:07]} 19.Rxf2 {[%clk 0:08:06]} Re1+ {[%clk 0:06:03]} 20.Rf1 {[%clk 0:08:06]} Rxf1+ {[%clk 0:05:49]} 21.Kxf1 {[%clk 0:08:03]} Qe7 {[%clk 0:05:32]} 22.Qh6 {[%clk 0:08:01]} Bf5 {[%clk 0:05:21]} 23.Bg5 {[%clk 0:07:49]} Bxd3+ {[%clk 0:05:14]} 24.Kg1 {[%clk 0:07:47]} f6 {[%clk 0:04:47]} 25.Bd5+ {[%clk 0:07:07]} Kh8 {[%clk 0:04:37]} 26.Rd1 {[%clk 0:06:58]} fxg5 {[%clk 0:04:10]} 27.Rxd3 {[%clk 0:06:54]} Qe1+ {[%clk 0:04:08]} 28.Kh2 {[%clk 0:06:52]} Qe5+ {[%clk 0:04:00]} 29.Kh1 {[%clk 0:06:47]} Qxb2 {[%clk 0:03:13]} 30.Qxg5 {[%clk 0:06:34]} Qb1+ {[%clk 0:03:08]} 31.Kh2 {[%clk 0:06:20]} Qxd3 {[%clk 0:03:06]} 32.Qf6# {[%clk 0:06:20]}";

function removeTimestamp(pgn) {
	var pgnArray = pgn.split(" ");
	var newPgnArray = [];
	for (var i = 0; i<pgnArray.length; i++) {
		if(i%3 === 0) {
			newPgnArray.push(pgnArray[i]);
		}
	}
	var finalPgn = newPgnArray.join(" ");
	return finalPgn;
}

console.log(removeTimestamp(yourPgn));