import java.util.*;
import edu.rit.pj.ParallelRegion;
import edu.rit.pj.ParallelTeam;
import edu.rit.pj.IntegerForLoop;
import edu.rit.pj.Comm;


public class PrimeParallel 
{ 
	static int n; 
	static long[] x; 
	static long t1, t2[], t3[]; 
	
	private static boolean isPrime (long x) { 
		if (x % 2 == 0) 
		{
			return false; 
		}
			
		long p = 3; 
		long psqr = p * p; 
		
		while (psqr <= x) { 
			if (x % p == 0) 
			{	
				return false;
			}
			
			p += 2; 
			psqr = p * p; 
		} 
		
		return true; 
	} 



	public static void main(String args[]) throws Exception { 
		t1 = System.currentTimeMillis(); 
		n = 4; 
		x = new long[n]; 
		
		// hard coded numbers
		x[0] = 1000000000000037;
		x[1] = 1000000000000187;
		x[2] = 1000000000000091;
		x[3] = 1000000000000159;
		
		
		t2 = new long[n]; 
		t3 = new long[n]; 
		
		new ParallelTeam(n).execute(new ParallelRegion() { 
			public void run() { 
				int i = getThreadIndex(); 
				t2[i] = System.currentTimeMillis(); 
				isPrime(x[i]); 
				t3[i] = System.currentTimeMillis(); 
			} 
		}); 
		
		for (int i = 0; i < n; i++) { 
			System.out.println("i= "+i+" call start = "+(t2[i]-t1)+"msec"); 
			System.out.println("i= "+i+" call finish = "+(t3[i]-t1)+"msec"); 
		} 
	} 
}