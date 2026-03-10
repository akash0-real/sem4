import java.util.Scanner;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Input input = new Input();

    input.inputStudent(scanner);
    input.showStudent();

    input.inputCourse(scanner);
    input.showCourse();
  }
}

// code is done by Akash
// the review is done by justin!!
//
class Student {
  private String name;
  private int age;
  private String course;

  Student(String name, int age, String course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getCourse() {
    return course;
  }
}

// code is done by justin
// the review is done by Akash!!
class Course {
  private String name;
  private String courseCode;
  private String facultyName;

  Course(String name, String courseCode, String facultyName) {
    this.name = name;
    this.courseCode = courseCode;
    this.facultyName = facultyName;
  }

  public String getName() {
    return name;
  }

  public String getCourseCode() {
    return courseCode;
  }

  public String getFacultyName() {
    return facultyName;
  }
}

class Input {
  ArrayList<Student> first = new ArrayList<>();
  ArrayList<Course> two = new ArrayList<>();

  void inputStudent(Scanner scanner) {
    System.out.println("How many students you want to enter: ");
    int choice = scanner.nextInt();
    scanner.nextLine();

    for (int i = 0; i < choice; i++) {
      System.out.println("Enter the name: ");
      String name = scanner.nextLine();

      System.out.println("Enter age: ");
      int age = scanner.nextInt();
      scanner.nextLine();

      System.out.println("Enter the course: ");
      String course = scanner.nextLine();

      first.add(new Student(name, age, course));
    }
  }

  void showStudent() {
    for (int i = 0; i < first.size(); i++) {
      Student s = first.get(i);
      System.out.println(s.getName() + " | " + s.getAge() + " | " + s.getCourse());
    }
  }

  void inputCourse(Scanner scanner) {
    System.out.println("How many courses: ");
    int choice = scanner.nextInt();
    scanner.nextLine();

    for (int i = 0; i < choice; i++) {
      System.out.println("Enter the name: ");
      String name = scanner.nextLine();

      System.out.println("Enter the code: ");
      String code = scanner.nextLine();

      System.out.println("Enter the faculty name: ");
      String faculty = scanner.nextLine();

      two.add(new Course(name, code, faculty));
    }
  }

  void showCourse() {
    for (int i = 0; i < two.size(); i++) {
      Course c = two.get(i);
      System.out.println(c.getName() + " | " + c.getCourseCode() + " | " + c.getFacultyName());
    }
  }
}
