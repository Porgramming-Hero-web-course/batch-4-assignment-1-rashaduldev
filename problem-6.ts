{
    //
    interface ProfileInfo {
        name: string;
        age: number;
        email: string;
      }
      
      function updateProfile(profile: ProfileInfo, updates: Partial<ProfileInfo>): ProfileInfo {
        return { ...profile, ...updates };
      }
      
      const myProfile = 
      { 
        name: "Alice", 
        age: 25, 
        email: "alice@example.com" 
      };
      console.log(updateProfile(myProfile, { age: 26 }));

    //
}