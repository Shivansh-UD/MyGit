import java.util.*;
class Rectangle{
    public int len;
    public int width;

    public int Area(){
        return len * width;
    }
     public int Perimeter(){
        return (2*len)+(2*width);
     }
}

class Cuboid extends Rectangle{
    public int height;
    public int volume(){
        return Area()*height;
    }
}

class Formulainheritance {
    public static void main(String[] args) {
        System.out.println("Welcome, Please enter values as per requirements: \n");
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter length: ");
        int length = scanner.nextInt();

        System.out.print("Enter width: ");
        int width = scanner.nextInt();

        System.out.print("Enter height: ");
        int height = scanner.nextInt();

        Cuboid cuboid = new Cuboid();
        cuboid.len = length;
        cuboid.width = width;
        cuboid.height = height;

        System.out.println("Area of Rectangle: " + cuboid.Area());
        System.out.println("Perimeter of Rectangle: " + cuboid.Perimeter());
        System.out.println("Volume of Cuboid: " + cuboid.volume());

     scanner.close();
    }
}
